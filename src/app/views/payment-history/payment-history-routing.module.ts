import {Routes } from '@angular/router';
import { PaymentHistoryComponent } from './payment-history.component';

export const paymentRouteRoutes: Routes = [
  {
    path: '',
    redirectTo: 'PaymentHistoryComponent'
  },
  {
    path: 'transaction/:id',
    component: PaymentHistoryComponent
  }
];




