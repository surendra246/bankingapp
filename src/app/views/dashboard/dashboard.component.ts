import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ServicesService } from '../../core/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customerDetails: any;

  //Inject ServicesService into constructor for access API calls
  constructor(
    private service: ServicesService
  ) {}

  ngOnInit() {
    this.service.getCustomerAccountDetails('345678909874').subscribe(
      res => {
        this.customerDetails = res[0];
      }
    );
  }
}