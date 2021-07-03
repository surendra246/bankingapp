import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.css']
})
export class TransferFundComponent implements OnInit {

  // Initialization of form
  fundTransferFrom: any;
  isSubmitted: boolean = false;
  // Defining FormBuilder with variable fb
  constructor(
    private fb: FormBuilder
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
  }

}
