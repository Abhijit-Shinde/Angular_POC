import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTotalComponent } from './orders/order-total/order-total.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { FormInputComponent } from './orders/form-input/form-input.component';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { StepperComponent } from './orders/stepper/stepper.component';
import { BasketSummaryComponent } from './orders/basket-summary/basket-summary.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OrderTotalComponent,
    FormInputComponent,
    StepperComponent,
    BasketSummaryComponent,
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    CdkStepperModule,
    RouterModule,
  ],
  exports: [
    OrderTotalComponent, 
    ReactiveFormsModule,
    BsDropdownModule,
    FormInputComponent,
    CdkStepperModule,
    StepperComponent,
    BasketSummaryComponent
  ]
})
export class SharedModule { }
