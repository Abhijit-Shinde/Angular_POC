import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product';
import { MainShopService } from '../main-shop.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  product : IProduct[];

  constructor(private mainShopService : MainShopService, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.viewProduct();
  }

  viewProduct(){
    this.mainShopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(product => {this.product = product;},err => {console.log(err)});
  }

}
