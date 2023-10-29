import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { CustomerModel } from '../customer/customer.component';

export interface OrderDetailModel {
  id: number;
  sender: CustomerModel;
  receiver : CustomerModel;
  totalamount: number;
}

export interface ItemModel {
  id: number;
  itemtype: number;
  itemquantity: number;
  itemname: string;
  itemprice: number
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
  item: ItemModel;
}

const ELEMENT_DATA: OrderModel[] = [];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  displayedColumns: string[] = ['id', 'orderdetailsender', 'orderdetailreceiver', 'orderdetailtotalamount', 'itemid', 'ordertype','orderstatus','username'];
  dataSource = ELEMENT_DATA;

  constructor(private http : HttpClient)
  {  }

  ngOnInit(): void {
    console.log('ngoninit of orders comp');
    let url = 'http://localhost:8080/order/orders';
    this.http.get<OrderModel[]>(url).subscribe(data => 
      
      {
        // console.log(data);
        this.dataSource = data;
      });
  }
  
}


