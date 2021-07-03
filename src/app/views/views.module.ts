import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewsRouteModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { TransferFundComponent } from './transfer-fund/transfer-fund.component';

import { ServicesService } from '../core/service.service';
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
      TransferFundComponent,
      LoginComponent
  ],
  providers: [
    ServicesService
  ],
  bootstrap: [ViewsComponent]
})
export class ViewsModule{}