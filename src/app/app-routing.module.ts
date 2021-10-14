import { SalesComponent } from './sales/sales.component';
import { ItemformComponent } from './itemform/itemform.component';
import { ItemComponent } from './item/item.component';
import { SupplierformComponent } from './supplierform/supplierform.component';

import { StockComponent } from './stock/stock.component';
import { SupplierComponent } from './supplier/supplier.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchasesComponent } from './purchases/purchases.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { CustomerComponent } from './customer/customer.component';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { CategoryformComponent } from './categoryform/categoryform.component';
import { CategoryComponent } from './category/category.component';
import { PlannedOrdersComponent } from './planned-orders/planned-orders.component';
import { CutomerDetailsComponent } from './cutomer-details/cutomer-details.component';

const routes: Routes = [
  { path: 'items', component: ItemComponent },
  { path: 'suppliers', component: SupplierComponent },
  { path: 'stocks', component: StockComponent },
  { path: 'purchases', component: PurchasesComponent },
  { path: 'purchaseLists', component: PurchasesListComponent },
  { path: 'new-purchase', component: PurchasesListComponent },
  { path: 'new-item', component: ItemformComponent },
  { path: 'new-supplier', component: SupplierformComponent },
  { path: 'new-customer', component: CustomerformComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'saleLists', component: SalesListComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'new-category', component: CategoryformComponent },
  { path: 'plannedOrders', component: PlannedOrdersComponent },
  { path: 'customerDetails', component: CutomerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
