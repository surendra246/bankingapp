import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../core/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  // service instances are created in constuructor
  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // model object which maintains form details
  model: any = {};

  // on submit this logic check user credentials are autorized or not
  onSubmit() {
    this.servicesService.getAllCustomers().subscribe((data) => {
      for (let obj of data) {
        if (obj.customer_id.localeCompare(this.model.customerid) == -1) {
          alert('Please enter valid Credentials');
          break;
        } else if (obj.customer_id.localeCompare(this.model.customerid) == 0) {
          let myurl = '/dashboard';
          this.router.navigate([myurl, obj.id]).then((e) => {
            if (e) {
              console.log('Navigation is successful!');
            } else {
              console.log('Navigation has failed!');
            }
          });
        }
      }
    });
  }
}
