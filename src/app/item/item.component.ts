import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

export interface ItemModel {
  id: number;
  itemtype: number;
  itemquantity: number;
  itemname: string;
  itemprice: number
}

const ELEMENT_DATA: ItemModel[] = [
  {id:1,itemtype:0,itemquantity:11,itemname:"pencil",itemprice:15},
  {id:2,itemtype:1,itemquantity:22,itemname:"shirt",itemprice:1200}
];

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  displayedColumns: string[] = ['id', 'itemtype', 'itemquantity', 'itemname','itemprice'];
  dataSource = ELEMENT_DATA;

  constructor(private http : HttpClient)
  {  }

  ngOnInit(): void {
    // console.log('ngoninit of item comp');
    let url = 'http://localhost:8080/order/item';
    this.http.get<ItemModel[]>(url).subscribe(data => 
      
      {
        // console.log(data);
        this.dataSource = data;
      });
  }


  
}
