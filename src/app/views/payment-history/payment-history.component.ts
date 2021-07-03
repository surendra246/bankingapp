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
  currentDate:any;
  constructor(private activeRoute:ActivatedRoute, private appService: ServicesService) { }

  ngOnInit(): void {
    this.currentDate = new Date();
    //fetch the account number from query string for retriving customer info
    this.activeRoute.params.subscribe((params:any)=>{
      //statement check if custome id found
      if(params.id >0){
        this.customerId = params.id;
        this.getCustomerAccountInfo(this.customerId);
        //check account number
          this.getTransactionDetails(this.customerId);
      }//end statement
    })//nd API method
  }

  //Get customer account details
  getCustomerAccountInfo(id:any){
    this.appService.getCustomerAccountDetails(id).subscribe((data:any)=>{
      //assigning data for rendering account info.
      //console.log("data::",data);
      this.acountinfo = data[0];
    })
  }//end function statement

  //creating method to get transaction details
  getTransactionDetails(acountNumber:any){
    //calling api method
    this.appService.getSearchResult(acountNumber).subscribe((data:any)=>{
      //assigning data for rendering.
      //console.log("data::",data);
      this.transactionData = data;
    })
  }//end function statement
}
