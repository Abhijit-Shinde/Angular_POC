import { Component, OnInit } from '@angular/core';
import { ICategory } from '../shared/interfaces/category';
import { IProduct } from '../shared/interfaces/product';
import { IStore } from '../shared/interfaces/store';
import { MainShopService } from './main-shop.service';

@Component({
  selector: 'app-main-shop',
  templateUrl: './main-shop.component.html',
  styleUrls: ['./main-shop.component.scss']
})
export class MainShopComponent implements OnInit {
  products : IProduct[];
  stores : IStore[];
  category : ICategory[];
  categoryIdSelected = 0;
  storeIdSelected = 0;
  sortSelect = 'field';
  sortDropdown = [{field:'A-Z',value:'name'},{field:'Price : Low to High',value:'priceAsc'},{field:'Price : High to Low',value:'priceDesc'}];

  constructor(private mainShopService: MainShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategory();
    this.getStore();
  }

  getProducts(){
    this.mainShopService.getProducts(this.storeIdSelected,this.categoryIdSelected,this.sortSelect).subscribe(response => {this.products = response.data;}, err => {console.log(err)});
  }

  getCategory(){

    this.mainShopService.getCategory().subscribe(response => {this.category = [{id: 0, name: 'All'}, ...response];}, err => {console.log(err)});

  }

  getStore(){

    this.mainShopService.getStore().subscribe(response => {this.stores = [{id: 0, name: 'All'}, ...response];}, err => {console.log(err)});

  }

  storeSelect(StoreId: number) {
    this.storeIdSelected = StoreId;
    this.getProducts();
  }

  categorySelect(CategoryId: number) {
    this.categoryIdSelected = CategoryId;
    this.getProducts();
  }

  sorting(sort: string) {
    this.sortSelect = sort;
    this.getProducts();
  }

}
