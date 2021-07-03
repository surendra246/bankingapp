import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewsRouteModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { LoginComponent } from '../auth/login/login.component';

@NgModule({
  imports: [
      ViewsRouteModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule
  ],
  declarations: [
      ViewsComponent,
      LoginComponent
  ],
  providers: [],
  bootstrap: [ViewsComponent]
})
export class ViewsModule{}