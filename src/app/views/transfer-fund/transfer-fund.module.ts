import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TransferFundComponent } from './transfer-fund.component';
import { transferFundRouteRoutes } from './transfer-fund-routing.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TransferFundComponent],
  imports: [CommonModule,ReactiveFormsModule,RouterModule.forChild(transferFundRouteRoutes)]
})
export class TransferFundModule { }
