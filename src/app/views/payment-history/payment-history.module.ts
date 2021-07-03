import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaymentHistoryComponent } from './payment-history.component';
import { paymentRouteRoutes } from './payment-history-routing.module';

@NgModule({
  declarations: [
    PaymentHistoryComponent],
  imports: [CommonModule,RouterModule.forChild(paymentRouteRoutes)]
})
export class PaymentHistoryModule { }
