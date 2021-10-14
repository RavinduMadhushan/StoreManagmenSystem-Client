import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../category';
import { Supplier } from '../supplier';

@Component({
  selector: 'app-itemform',
  templateUrl: './itemform.component.html',
  styleUrls: ['./itemform.component.css'],
  providers: [],
})
export class ItemformComponent implements OnInit {
  itemForm!: FormGroup;
  categories: Category[] = [];
  suppliers: Supplier[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    
    this.http.get('http://localhost:3000/category').subscribe((data: any) => {
      console.log(data);
      this.categories = data;
    });
    this.http.get('http://localhost:3000/supplier').subscribe((data: any) => {
      console.log(data);
      this.suppliers = data;
    });
    
    this.itemForm = this.formBuilder.group({
      unitCode: ['', [Validators.required]],
      productDescription: ['', [Validators.required]],
      category: ['', [Validators.required]],
      supplier: ['', [Validators.required]],
      minOrder: ['', [Validators.required]],
      unitCost: ['', [Validators.required]],
      marketPrice: ['', [Validators.required]],
      predictedPrice: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.http
      .post('http://localhost:3000/item', this.itemForm.value)
      .subscribe((response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Item Details',
          detail: 'Saved Successfully',
          key: 't1',
        });
        console.log(response);
        this.route.navigate(['/items']);
      });
  }
}
