import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTotalComponent } from './orders/order-total/order-total.component';



@NgModule({
  declarations: [
    OrderTotalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [OrderTotalComponent]
})
export class SharedModule { }
