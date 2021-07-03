//injecting usefull libraries for this services.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//created service class
export class ServicesService {
  //Inject HttpClient into constructor for access API method 
  constructor(private http: HttpClient ) {}

  //Define the Config API Base URl
  configUrl = 'http://localhost:3000/';

  //fetch all customers list
  getAllCustomers(){
    return this.http.get<any>(this.configUrl+'customers');
  }

  //fetch all accounts list
  getAllAccounts(){
    return this.http.get<any>(this.configUrl+'accounts_detail');
  }

  //fetch all transactions history
  getAllTransactions(){
    return this.http.get<any>(this.configUrl+'transactions');
  }

  //fetch login customer details
  getCustomerById(id:any){
    return this.http.get<any>(this.configUrl+'customer/'+id)
  }

  //fetch customer account details by ID
  getCustomerAccountDetails(id:any){
    return this.http.get<any>(this.configUrl+'account_detail/'+id)
  }

  //fetch account history by account number
  getSearchResult(key:any){
    return this.http.get<any>(this.configUrl+'transaction/'+key);
  }

  //fetch account details by customer id
  getAccountByCustomerId(custId: any) {
    return this.http.get<any>(`${this.configUrl}account_detail/customer/${custId}`);
  }

  // fund trasfer api
  transferFunds(data: Object) {
    return this.http.post<any>(`${this.configUrl}transactions`, data);
  }

}//end service class
