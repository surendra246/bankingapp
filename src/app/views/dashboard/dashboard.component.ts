import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Router } from '@angular/router';

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
    private service: ServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.getAccountByCustomerId(this.route.snapshot.paramMap.get('id')).subscribe(
      res => {
        this.customerDetails = res[0];
      }
    );
  }

  navigate(type: string) {
    switch (type) {
      case 'accountdetails':
        this.router.navigate([`transaction/${this.customerDetails.account_number}`])
        break;
      case 'fundtransfer':
        this.router.navigate([`transfer-fund`]);
        break;
    }
  }
}