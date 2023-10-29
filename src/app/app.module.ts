import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import {  MatButtonModule} from '@angular/material/button';
import{MatToolbarModule} from '@angular/material/toolbar';
import {  MatCardModule} from '@angular/material/card';
import{MatInputModule} from '@angular/material/input';
import {  MatDialogModule} from '@angular/material/dialog';
import{MatTableModule} from '@angular/material/table';
import {  MatMenuModule} from '@angular/material/menu';
import{MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { VertnavComponent } from './vertnav/vertnav.component';
import { HttpClientModule } from '@angular/common/http';
import { AddressComponent } from './address/address.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { PaymentComponent } from './payment/payment.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemComponent,
    VertnavComponent,
    AddressComponent,
    CustomerComponent,
    OrdersComponent,
    AddAddressComponent,
    AddCustomerComponent,
    AddItemComponent,
    AddOrderComponent,
    PaymentComponent,
    AddPaymentComponent,
    CreatePaymentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  HttpClientModule,
  MatFormFieldModule, MatInputModule, MatSelectModule,
  MatSnackBarModule
  ],
  exports: [
    MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatSidenavModule,
   MatListModule,
   MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
