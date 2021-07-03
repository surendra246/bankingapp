import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentHistoryComponent } from './views/payment-history/payment-history.component';

//define the Route
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  },
  {
    path: 'transaction/:id',
    component:PaymentHistoryComponent
  },
  //adding lazy loading proccess
  {path:'transaction/:id',loadChildren:()=>import('./views/payment-history/payment-history.module').then(m=>m.PaymentHistoryModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
