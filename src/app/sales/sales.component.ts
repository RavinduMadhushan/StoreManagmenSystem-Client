import { Customer } from './../customer';
import { element } from 'protractor';

import { Item } from '../item';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CreateSaleDto } from './../create-sale-dto';
import { SaleItemDto } from './../sale-item-dto';

import { Component, OnInit } from '@angular/core';
import { spawn } from 'child_process';
import { MessageService } from 'primeng/api';
interface Weight {
  name: string;
  value: number;
}
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  customers: Customer[] = [];
  saleItems: SaleItemDto[] = [];
  items: Item[] = [];
  weights!: Weight[];
  selectedWeight!: Weight;

  saleItemForm!: FormGroup;
  customerForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.customerForm = this.formBuilder.group({
    //   customerId: [''],
    // });

    this.saleItemForm = this.formBuilder.group({
      itemId: [''],
      weight: [''],
      price: [''],
      quantity: [''],
    });

    this.http.get('http://localhost:3000/customer').subscribe((data: any) => {
      this.customers = data;
    });
    this.http.get('http://localhost:3000/item').subscribe((data: any) => {
      this.items = data;
    });
  }

  onAdd(): void {
    let itemName = '';
    let marketPrice = 0;
    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index];

      if (element.id === parseInt(this.saleItemForm.value.itemId)) {
        itemName = element.productDescription;
        marketPrice = element.marketPrice;
      }
    }

    console.log(this.saleItemForm.value);
    let saleItemDto: SaleItemDto = new SaleItemDto();
    saleItemDto.itemId = this.saleItemForm.value.itemId;
    saleItemDto.price = marketPrice * this.saleItemForm.value.quantity;
    saleItemDto.itemName = itemName;
    saleItemDto.quantity = this.saleItemForm.value.quantity;

    this.saleItems.push(saleItemDto);
  }

  onSubmit(): void {
    let saleDto: CreateSaleDto = new CreateSaleDto();
    saleDto.customerId = 14;
    saleDto.saleItems = this.saleItems;
    console.log(saleDto);

    this.http
      .post('http://localhost:3000/sales', saleDto)
      .subscribe((response) => {
        console.log(response);
        this.messageService.add({
          severity: 'success',
          summary: 'Item Details',
          detail: 'Saved Successfully',
          key: 't1',
        });
        this.router.navigate(['/customerDetails', { saleDto: saleDto }]);
      });
  }
}
