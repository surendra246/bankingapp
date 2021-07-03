import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ServicesService } from 'src/app/core/service.service';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.css']
})
export class TransferFundComponent implements OnInit {

  // Initialization of form
  fundTransferFrom: any;
  isSubmitted: boolean = false;
  error: boolean = false;
  errorMsg: string = '';
  success: boolean = false;
  successMsg: string = '';
  customerDetails: any;
  // Defining FormBuilder with variable fb
  constructor(
    private fb: FormBuilder,
    private ss: ServicesService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  // Function to initialize Fund Transfer From
  initForm() {
    this.fundTransferFrom = this.fb.group({
      originAccount: ['', [Validators.required]],
      destinationAccount: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      comment: ['']
    });
  }

  get fudTransferFormControls() {
    return this.fundTransferFrom.controls;
  }

  confirm() {
    this.isSubmitted = true;
    if (this.fundTransferFrom.value.amount < 0) {
      this.error = true;
      this.success = false;
      this.errorMsg = 'Invalid Amount';
      return;
    }
    this.ss.getCustomerAccountDetails(this.fundTransferFrom.value.originAccount).subscribe(
      res => {
        if (res.length === 0) {
          this.error = true;
          this.success = false;
          this.errorMsg = 'Invalid Origin Account Details';
          return;
        }
        this.ss.getCustomerAccountDetails(this.fundTransferFrom.value.destinationAccount).subscribe(
          res => {
           if (res.length === 0) {
             this.error = true;
             this.success = false;
             this.errorMsg = 'Invalid Destination Account Details';
             return;
            }
            this.ss.transferFunds(this.fundTransferFrom.value).subscribe(
              res => {
                if (res.id) {
                  this.error = false;
                  this.success = true;
                  this.successMsg = 'Fund Transfer Successfull';
                  this.isSubmitted = false;
                }
              },
              err => {
                this.error = true;
                this.errorMsg = 'Server Error';
                return;
              }
            )
          },
          error => {
            this.error = true;
            this.errorMsg = 'Server Error';
          }
        )
      }, err => {
        this.error = true;
        this.errorMsg = 'Server Error';
        return;
      }
    )
  }

}
