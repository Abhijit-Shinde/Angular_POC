import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainShopComponent } from './main-shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ViewProductComponent } from './view-product/view-product.component';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainShopComponent,
    ProductItemComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [MainShopComponent]
})
export class MainShopModule { }
