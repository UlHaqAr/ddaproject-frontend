import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit{

  orderid: any;
  paytype: any;
  paystatus: any;
  amount:any;
  userName: any;
  password: any;

  constructor(private http : HttpClient, private _snackBar: MatSnackBar)
  {  }

  ngOnInit(): void {
    // console.log('ngoninit of add-item comp');
    
    } 

  add()
  {
    this.openSnackBar('Request Sent.')
    let url = 'http://localhost:8080/order/orders/' + this.orderid;

    this.http.get<OrderModel>(url).subscribe(data => 
      {
        // console.log(data);
        let orderModel = data;
        this.createPayment(orderModel);
      });
  }

  createPayment(orderModel:OrderModel)
  {
    let userModel = {userName: this.userName, password: this.password};
    let paymentModel = {order: orderModel, amount: this.amount, paystatus: this.paystatus, paytype: this.paytype, user: userModel};
    let url = 'http://localhost:8080/order/pay/';
    this.http.post(url,paymentModel).subscribe(data => 
      {
        // console.log(data);
        this.openSnackBar('Request Sent.')
      });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK');
  }

}

 

