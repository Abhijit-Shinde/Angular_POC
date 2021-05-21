import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/protector/authentication.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'shop',loadChildren: () => import('./main-shop/main-shop.module').then(mod => mod.MainShopModule)},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
  {path: 'basket',loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule)},
  {path: 'checkout',canActivate: [AuthenticationGuard],loadChildren: () => import('./checkout/checkout.module').then(mod => mod.CheckoutModule)},
  {path: 'account',loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
