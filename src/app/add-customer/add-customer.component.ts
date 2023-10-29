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

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit{

  age: any;
  name: string='';
  phone: any;
  addressid: any;

  constructor(private http : HttpClient)
  {  }

  ngOnInit(): void {
    // console.log('ngoninit of add-item comp');
    
    } 

  add()
  {
    let addressModel = {housenumber:0, area:'', pincode:0};
    let url1 = 'http://localhost:8080/order/address/'+this.addressid;
    this.http.get<AddressModel>(url1).subscribe(data => 
      {
        // console.log(data);
        addressModel.area = data.area;
        addressModel.housenumber = data.housenumber;
        addressModel.pincode = data.pincode;
      });

    
    const customerModel = {age:this.age, name:this.name, phone:this.phone, address: addressModel};

    // console.log(customerModel);
    
    let url = 'http://localhost:8080/order/customer';
    this.http.post(url,customerModel).subscribe(data => 
    {
      console.log(data);
    });
  }
}