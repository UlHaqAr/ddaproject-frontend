import { Component } from '@angular/core';

@Component({
  selector: 'app-vertnav',
  templateUrl: './vertnav.component.html',
  styleUrls: ['./vertnav.component.css']
})
export class VertnavComponent {

  getAddresses: boolean= false;
  getItems:boolean=false;
  getCustomers: boolean= false;
  getOrders:boolean = false;
  addAddresses:boolean = false;
  addItem:boolean=false;
  addOrder:boolean=false;
  getPayment:boolean=false;
  addPayment:boolean=false;
  addCustomer:boolean=false;
  updatePayment:boolean=false;
  

  showGetItems()
  {
    this.getAddresses = false;
    this.getCustomers = false;
    this.getOrders = false;
    this.addAddresses = false;
    this.addItem= false;
    this.addOrder=false;
    this.getPayment=false;
    this.addPayment=false;
    this.addCustomer=false;
    this.updatePayment=false;

    this.getItems = true;
  }

  showGetAddresses()
  {
    this.getItems = false;
    this.getCustomers = false;
    this.getOrders = false;
    this.addAddresses = false;
    this.addItem= false;
    this.addOrder=false;
    this.getPayment=false;
    this.addPayment=false;
    this.addCustomer=false;
    this.updatePayment=false;

    this.getAddresses = true;
  }

  showGetCustomers()
  {
    this.getItems = false;
    this.getAddresses = false;
    this.getOrders = false;
    this.addAddresses = false;
    this.addItem= false;
    this.addOrder=false;
    this.getPayment=false;
    this.addPayment=false;
    this.addCustomer=false;
    this.updatePayment=false;

    this.getCustomers = true;
  }

  showGetOrders()
  {
    this.getItems = false;
    this.getAddresses = false;
    this.getCustomers = false;
    this.addAddresses = false;
    this.addItem= false;
    this.addOrder=false;
    this.getPayment=false;
    this.addPayment=false;
    this.addCustomer=false;
    this.updatePayment=false;

    this.getOrders = true;
  }

  showAddAddress()
  {
    this.getItems = false;
    this.getAddresses = false;
    this.getCustomers = false;
    this.getOrders = false;
    this.addItem= false;
    this.addOrder=false;
    this.getPayment=false;
    this.addPayment=false;
    this.addCustomer=false;
    this.updatePayment=false;

    this.addAddresses = true;
  }

  showAddItem()
  {
    this.getItems = false;
    this.getAddresses = false;
    this.getCustomers = false;
    this.getOrders = false;
    this.addAddresses = false;
    this.addOrder=false;
    this.getPayment=false;
    this.addPayment=false;
    this.addCustomer=false;
    this.updatePayment=false;

    this.addItem= true;
  }

  showAddOrder()
  {
    this.getItems = false;
    this.getAddresses = false;
    this.getCustomers = false;
    this.getOrders = false;
    this.addAddresses = false;
    this.addItem= false;
    this.getPayment=false;
    this.addPayment=false;
    this.addCustomer=false;
    this.updatePayment=false;

    this.addOrder=true;
  }

  showGetPayment()
  {
    this.getItems = false;
    this.getAddresses = false;
    this.getCustomers = false;
    this.getOrders = false;
    this.addAddresses = false;
    this.addItem= false;
    this.addOrder=false;
    this.addPayment=false;
    this.addCustomer=false;
    this.updatePayment=false;

    this.getPayment=true;
  }

  showAddPayment()
  {
    this.getItems = false;
    this.getAddresses = false;
    this.getCustomers = false;
    this.getOrders = false;
    this.addAddresses = false;
    this.addItem= false;
    this.addOrder=false;
    this.getPayment=false;
    this.addCustomer=false;
    this.updatePayment=false;

    this.addPayment=true;
  }

  showAddCustomer()
  {
    this.getItems = false;
    this.getAddresses = false;
    this.getCustomers = false;
    this.getOrders = false;
    this.addAddresses = false;
    this.addItem= false;
    this.addOrder=false;
    this.getPayment=false;
    this.addPayment=false;
    this.updatePayment=false;

    this.addCustomer=true;
  }

  showUpdatePayment()
  {
    this.getItems = false;
    this.getAddresses = false;
    this.getCustomers = false;
    this.getOrders = false;
    this.addAddresses = false;
    this.addItem= false;
    this.addOrder=false;
    this.getPayment=false;
    this.addCustomer=false;
    this.addPayment=false;

    this.updatePayment=true;
  }

}
