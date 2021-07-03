import {Routes } from '@angular/router';
import { TransferFundComponent } from './transfer-fund.component';

export const transferFundRouteRoutes: Routes = [
  {
    path: '',
    redirectTo: 'TransferFundComponent'
  },
  {
    path: 'trasnfer-fund',
    component: TransferFundComponent
  }
];




