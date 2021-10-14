import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Customer } from './../customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/customer').subscribe((data: any) => {
      console.log(data);
      this.customers = data;
    });
  }

  addCustomerDetails(): void {
    this.router.navigate(['/new-customer']);
  }
  findcustomer(): void {
    this.router.navigate(['/customerDetails']);
  }
}
