import { ItemComponent } from './item/item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SupplierComponent } from './supplier/supplier.component';
import { StockComponent } from './stock/stock.component';
import { ItemformComponent } from './itemform/itemform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupplierformComponent } from './supplierform/supplierform.component';

import { HttpClientModule } from '@angular/common/http';
import { PurchasesComponent } from './purchases/purchases.component';
import {ContextMenuModule} from 'primeng/contextmenu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CustomerComponent } from './customer/customer.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { SalesComponent } from './sales/sales.component';
import { PanelModule } from 'primeng/panel';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { CategoryComponent } from './category/category.component';
import { CategoryformComponent } from './categoryform/categoryform.component';
import { DatePipe } from './date.pipe';
import { PlannedOrdersComponent } from './planned-orders/planned-orders.component';
import { CutomerDetailsComponent } from './cutomer-details/cutomer-details.component';
import { WebcamModule } from 'ngx-webcam';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemformComponent,
    ItemComponent,
    SupplierComponent,
    StockComponent,
    SupplierformComponent,
    PurchasesComponent,
    CustomerComponent,
    CustomerformComponent,
    SalesComponent,
    PurchasesListComponent,
    SalesListComponent,
    CategoryComponent,
    CategoryformComponent,
    DatePipe,
    PlannedOrdersComponent,
    CutomerDetailsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    WebcamModule,
    ToastModule,
    HttpClientModule,
    NgbModule,
    ToastModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    PanelModule,
    ContextMenuModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
