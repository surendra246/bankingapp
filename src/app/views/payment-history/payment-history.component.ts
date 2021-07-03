import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/core/service.service';


@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {

  //define the variable.
  acountinfo:any;
  customerId:Number=0
  transactionData:any;
  constructor(private activeRoute:ActivatedRoute, private appService: ServicesService) { }

  ngOnInit(): void {
    //fetch the account number from query string for retriving customer info
    this.activeRoute.params.subscribe((params:any)=>{
      //statement check if custome id found
      if(params.id >0){
        this.customerId = params.id;
        this.getCustomerAccountInfo(this.customerId);
        //check account number
        if(this.acountinfo.account_number!=""){
          this.getTransactionDetails(this.acountinfo.account_number);
        }        
      }//end statement
    })//nd API method
  }

  //Get customer account details
  getCustomerAccountInfo(id:any){
    this.appService.getCustomerById(id).subscribe((data:any)=>{
      //assigning data for rendering account info.
      this.acountinfo = data;
    })
  }//end function statement

  //creating method to get transaction details
  getTransactionDetails(acountNumber:any){
    //calling api method
    this.appService.getSearchResult(acountNumber).subscribe((data:any)=>{
      //assigning data for rendering.
      this.transactionData = data;
    })
  }//end function statement
}
