import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseList } from '../purchase-list';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.css'],
})
export class PurchasesListComponent implements OnInit {
  purchaseLists: PurchaseList[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/purchases').subscribe((data: any) => {
      console.log(data);
      this.purchaseLists = data;
    });
  }

  addPurchaseDetails(): void {
    this.router.navigate(['/purchases']);
  }
}
