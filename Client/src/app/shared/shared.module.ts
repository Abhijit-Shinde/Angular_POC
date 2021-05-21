import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTotalComponent } from './orders/order-total/order-total.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { FormInputComponent } from './orders/form-input/form-input.component';


@NgModule({
  declarations: [
    OrderTotalComponent,
    FormInputComponent,
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports: [OrderTotalComponent, ReactiveFormsModule,BsDropdownModule,FormInputComponent]
})
export class SharedModule { }
