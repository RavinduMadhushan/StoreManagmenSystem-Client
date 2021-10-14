import { element } from 'protractor';
import { CreatePurchaseDto } from './../create-purchase-dto';
import { PurchaseItemDto } from './../purchase-item-dto';
import { Item } from '../item';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Supplier } from './../supplier';

import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchases.service';
import { spawn } from 'child_process';
import { MessageService } from 'primeng/api';

interface Weight {
  name: string;
  value: number;
}
@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css'],
})
export class PurchasesComponent implements OnInit {

  items: Item[] = [];
  purchaseItemForm!: FormGroup;
  supplierForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService
  ) {
  
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/item').subscribe((data: any) => {
      this.items = data;
    });
    this.purchaseItemForm = this.formBuilder.group({
      itemId: [''],
      quantity: [''],
    });

 
  }

 

  onSubmit(): void {
 

    this.http
      .post('http://localhost:3000/purchases', this.purchaseItemForm.value)
      .subscribe((response) => {
        console.log(this.purchaseItemForm.value
          );
        this.messageService.add({
          severity: 'success',
          summary: 'Item Details',
          detail: 'Saved Successfully',
          key: 't1',
        });
        this.router.navigate(['/purchaseLists']);
      });
  }
}
