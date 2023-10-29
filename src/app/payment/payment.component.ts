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

const ELEMENT_DATA: PaymentModel[] = [];

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  displayedColumns: string[] = ['id', 'orderid', 'amount', 'paystatus', 'paytype','username'];
  dataSource = ELEMENT_DATA;

  constructor(private http : HttpClient)
  {  }

  ngOnInit(): void {
    console.log('ngoninit of payment comp');
    let url = 'http://localhost:8080/order/pay';
    this.http.get<PaymentModel[]>(url).subscribe(data => 
      
      {
        // console.log(data);
        this.dataSource = data;
      });
  }
  
}