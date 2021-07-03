import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewsRouteModule } from './views-routing.module';
import { ViewsComponent } from './views.component';

@NgModule({
  imports: [
      ViewsRouteModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule
  ],
  declarations: [
      ViewsComponent
  ],
  providers: [],
  bootstrap: [ViewsComponent]
})
export class ViewsModule{}