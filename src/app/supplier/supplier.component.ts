import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Supplier } from './../supplier';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
})
export class SupplierComponent implements OnInit {
  suppliers: Supplier[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/supplier').subscribe((data: any) => {
      console.log(data);
      this.suppliers = data;
    });
  }

  addSupplierDetails(): void {
    this.router.navigate(['/new-supplier']);
  }
}
