import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewsComponent } from './views.component';

const routes: Routes = [
  {
    path: '', component: ViewsComponent,
    children: [
      // Route Configuration for dashboard
      {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ViewsRouteModule {}