import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

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

const ELEMENT_DATA: CustomerModel[] = [];

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  displayedColumns: string[] = ['id', 'age', 'name', 'phone', 'addressid'];
  dataSource = ELEMENT_DATA;

  constructor(private http : HttpClient)
  {  }

  ngOnInit(): void {
    // console.log('ngoninit of customer comp');
    let url = 'http://localhost:8080/order/customer';
    this.http.get<CustomerModel[]>(url).subscribe(data => 
      
      {
        // console.log(data);
        this.dataSource = data;
      });
  }


  
}


