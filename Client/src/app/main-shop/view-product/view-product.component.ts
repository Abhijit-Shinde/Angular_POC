import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { MainShopService } from '../main-shop.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  product : IProduct[];

  constructor(private mainShopService : MainShopService, private activatedRoute : ActivatedRoute, private basketService: BasketService) { }

  ngOnInit(){
    this.viewProduct();
  }
  
  viewProduct(){
    this.mainShopService.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(product => {this.product = product;},err => {console.log(err)});
  }
}
