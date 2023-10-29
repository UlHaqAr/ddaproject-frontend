import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

export interface AddressModel {
  id: number;
  housenumber: number;
  area: string;
  pincode: number;
}

const ELEMENT_DATA: AddressModel[] = [];

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit{

  displayedColumns: string[] = ['id', 'housenumber', 'area', 'pincode'];
  dataSource = ELEMENT_DATA;

  constructor(private http : HttpClient)
  {  }

  ngOnInit(): void {
    // console.log('ngoninit of address comp');
    let url = 'http://localhost:8080/order/address';
    this.http.get<AddressModel[]>(url).subscribe(data => 
      
      {
        // console.log(data);
        this.dataSource = data;
      });
  }


  
}


