import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface ItemModel {
  id: number;
  itemtype: number;
  itemquantity: number;
  itemname: string;
  itemprice: number;
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{

  itemtype: any;
  itemquantity: any;
  itemname: string='';
  itemprice: any;

  constructor(private http : HttpClient)
  {  }

  ngOnInit(): void {
    // console.log('ngoninit of add-item comp');
    
    } 

  add()
  {
    const itemModel = {itemtype:this.itemtype,itemquantity:this.itemquantity,itemname:this.itemname,itemprice:this.itemprice};
    console.log(itemModel);
    let url = 'http://localhost:8080/order/item';
    this.http.post(url,itemModel).subscribe(data => 
    {
      console.log(data);
    });
  }
}