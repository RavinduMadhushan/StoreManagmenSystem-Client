import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaleList } from '../sale-list';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css'],
})
export class SalesListComponent implements OnInit {
  saleLists: SaleList[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/sales').subscribe((data: any) => {
      console.log(data);
      this.saleLists = data;
    });
  }

  addSaleDetails(): void {
    this.router.navigate(['/sales']);
  }
}
