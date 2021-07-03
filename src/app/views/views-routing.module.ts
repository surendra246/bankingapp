import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewsComponent } from './views.component';
import { TransferFundComponent } from './transfer-fund/transfer-fund.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      // Route Configuration for dashboard
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'dashboard/:id', component: DashboardComponent
      },
      {
        path: 'transfer-fund', component: TransferFundComponent
      },
      {
        path: '', redirectTo: '/login', pathMatch: 'full'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRouteModule {}