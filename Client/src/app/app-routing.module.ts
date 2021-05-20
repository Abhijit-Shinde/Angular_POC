import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { MainShopComponent } from './main-shop/main-shop.component';
import { ViewProductComponent } from './main-shop/view-product/view-product.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'shop',loadChildren: () => import('./main-shop/main-shop.module').then(mod => mod.MainShopModule)},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
  {path: 'basket',loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule)},
  {path: 'checkout',loadChildren: () => import('./checkout/checkout.module').then(mod => mod.CheckoutModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
