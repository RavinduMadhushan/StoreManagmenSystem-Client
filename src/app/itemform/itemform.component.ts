import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.http
        .get('http://localhost:3000/item/' + id)
        .subscribe((data: any) => {
          this.itemForm.patchValue(data);
        });
    }

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
      categoryId: ['', [Validators.required]],
      supplierId: ['', [Validators.required]],
      minOrder: ['', [Validators.required]],
      unitCost: ['', [Validators.required]],
      marketPrice: ['', [Validators.required]],
      predictedPrice: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.http
        .put('http://localhost:3000/item/' + id, this.itemForm.value)
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
    } else {
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
}
