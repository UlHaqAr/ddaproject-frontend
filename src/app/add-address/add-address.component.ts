import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface AddressModel {
  id: number;
  housenumber: number;
  area: string;
  pincode: number;
}

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit{

  housenumber: any;
  area: string='';
  pincode: any;

  constructor(private http : HttpClient, private _snackBar: MatSnackBar)
  {  }

  ngOnInit(): void {
    console.log('ngoninit of add-address comp');
    
    } 

  addAddress()
  {
    const addressModel = {housenumber:this.housenumber,area:this.area,pincode:this.pincode};
    // console.log(addressModel);
    let url = 'http://localhost:8080/order/address';
    this.http.post(url,addressModel).subscribe(data => 
    {
      // console.log(data);
      this.openSnackBar('Request Sent.')
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK');
  }
}