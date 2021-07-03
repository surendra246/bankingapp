import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
