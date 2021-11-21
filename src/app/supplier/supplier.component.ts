import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Supplier } from './../supplier';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
})
export class SupplierComponent implements OnInit {
  suppliers: Supplier[] = [];
  items!: MenuItem[];
  selectedProduct: Supplier | undefined;
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/supplier').subscribe((data: any) => {
      console.log(data);
      this.suppliers = data;
    });
    this.items = [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-search',
        command: () => this.viewProduct(),
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-times',
        command: () => this.deleteProduct(),
      },
    ];
  }
  viewProduct() {
    // this.messageService.add({severity: 'info', summary: 'Product Selected', detail: product.name });
  }

  deleteProduct() {
    // this.products = this.products.filter((p) => p.id !== product.id);
    // this.messageService.add({severity: 'info', summary: 'Product Deleted', detail: product.name});
    // this.selectedProduct = null;
  }

  addSupplierDetails(): void {
    this.router.navigate(['/new-supplier']);
  }
}
