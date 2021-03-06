import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainShopComponent } from './main-shop.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path: '',component:MainShopComponent},
  {path: ':id',component:ViewProductComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainShopRoutingModule { }
