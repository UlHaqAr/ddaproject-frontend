import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface AddressModel {
  id: number;
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

export interface ItemModel {
  id: number;
  itemtype: number;
  itemquantity: number;
  itemname: string;
  itemprice: number;
}

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
 
  ordertype:any;
  orderstatus:any;
  password:string='';
  userName:string='';
  totalamount:any;
  senderid:any;
  receiverid:any;
  itemid: any;

  senderAddressModel = {housenumber:0, area:'', pincode:0};
  senderModel = {age:0 , name:'' , phone:0 , address:this.senderAddressModel };

  receiverAddressModel = {housenumber:0, area:'', pincode:0};
  receiverModel = {age:0 , name:'' , phone:0 , address: this.receiverAddressModel };

  itemModel = {itemtype:0, itemquantity:0, itemname:'', itemprice:0};
  
    constructor(private http : HttpClient, private _snackBar: MatSnackBar)
    {  }
  
    ngOnInit(): void {
      // console.log('ngoninit of add-item comp');
      
      } 
  
    add()
    {
      // let orderDetailModel = {sender:, receiver:'', totalamount:0};
      
      this.getSenderData();

      // console.log('test: ' , orderModel);

    }

    getReceiverData()
    {
      let receiverurl = 'http://localhost:8080/order/customer/id/'+this.receiverid;
      this.http.get<CustomerModel>(receiverurl).subscribe(data => 
        {
          // console.log(data);
          this.receiverModel.age = data.age;
          this.receiverModel.name = data.name;
          this.receiverModel.phone = data.phone;
          this.receiverAddressModel.area = data.address.area;
          this.receiverAddressModel.housenumber = data.address.housenumber;
          this.receiverAddressModel.pincode = data.address.pincode;
          this.receiverModel.address = this.receiverAddressModel;
          this.getItem();
        });
    }

    getSenderData()
    {
      let senderurl = 'http://localhost:8080/order/customer/id/'+this.senderid;
      this.http.get<CustomerModel>(senderurl).subscribe(data => 
        {
          // console.log(data);
          this.senderModel.age = data.age;
          this.senderModel.name = data.name;
          this.senderModel.phone = data.phone;
          this.senderAddressModel.area = data.address.area;
          this.senderAddressModel.housenumber = data.address.housenumber;
          this.senderAddressModel.pincode = data.address.pincode;
          this.senderModel.address = this.senderAddressModel;
          this.getReceiverData();
        });
    }

    getItem()
    {
      let url = 'http://localhost:8080/order/item/' + this.itemid;
      this.http.get<ItemModel>(url).subscribe(data => 
      
      {
        // console.log(data);
        this.itemModel.itemname = data.itemname;
        this.itemModel.itemprice = data.itemprice;
        this.itemModel.itemquantity = data.itemquantity;
        this.itemModel.itemtype = data.itemtype;
        this.addOrder();
      });
    }

    addOrder()
    {
      let userModel = {userName:this.userName, password:this.password};
      let orderDetailModel = {sender:this.senderModel, receiver:this.receiverModel, totalamount:this.totalamount};
      let orderModel = {orderstatus: this.orderstatus, ordertype: this.ordertype, user: userModel, orderdetail:orderDetailModel, item: this.itemModel};

      let url = 'http://localhost:8080/order/orders';
      this.http.post(url,orderModel).subscribe(data => 
      {
        // console.log(data);
        this.openSnackBar('Request Sent.')
      });
    }

    openSnackBar(message: string) {
      this._snackBar.open(message, 'OK');
    }


  }