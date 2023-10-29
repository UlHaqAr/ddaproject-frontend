import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface AddressModel {
  housenumber: number;
  area: string;
  pincode: number;
}

export interface CustomerModel {
  id: number;
  age: number;
  name: string;
  phone: number;
  address: AddressModel;
}

export interface OrderDetailModel {
  id: number;
  sender: CustomerModel;
  receiver : CustomerModel;
  totalamount: number;
}

export interface UserModel {
  id: number;
  userName: string;
  password: string;
}

export interface OrderModel {
  id: number;
  orderdetail: OrderDetailModel;
  ordertype: number;
  orderstatus: number;
  user: UserModel;
}

export interface PaymentModel {
  id:number;
  order: OrderModel;
  amount:number;
  paystatus:number;
  paytype:number;
  user: UserModel;
}

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit{

  paymentid: any;
  paytype: any;
  paystatus: any;

  constructor(private http : HttpClient)
  {  }

  ngOnInit(): void {
    // console.log('ngoninit of add-item comp');
    
    } 

  add()
  {
    let url = 'http://localhost:8080/order/pay/' + this.paymentid;

    this.http.get<PaymentModel>(url).subscribe(data => 
      {
        console.log(data);
        let paymentModel = data;
        this.updatePayment(paymentModel, this.paymentid);
      });
  }

  updatePayment(paymentModel:PaymentModel, id: any)
  {
    paymentModel.paystatus = this.paystatus;
    paymentModel.paytype = this.paytype;
    let url = 'http://localhost:8080/order/pay/' + this.paymentid;
    this.http.post(url,paymentModel).subscribe(data => 
      {
        // console.log(data);
      });


  }

}

 

