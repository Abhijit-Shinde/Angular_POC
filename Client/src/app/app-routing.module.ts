import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShopComponent } from './main-shop/main-shop.component';
import { ViewProductComponent } from './main-shop/view-product/view-product.component';

const routes: Routes = [
  {path: '',component:MainShopComponent},
  {path: ':id',component:ViewProductComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
