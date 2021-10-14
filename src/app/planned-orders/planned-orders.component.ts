import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../stock';

@Component({
  selector: 'app-planned-orders',
  templateUrl: './planned-orders.component.html',
  styleUrls: ['./planned-orders.component.css'],
})
export class PlannedOrdersComponent implements OnInit {
  stocks: Stock[] = [];
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/stock').subscribe((data: any) => {
    
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (element.predictedQuantity - element.quantity > 0) {
          element.difference = element.predictedQuantity - element.quantity;
        } else {
          element.difference = 0;
        }
      }
     
      this.stocks = data;
      console.log(data);
    });
  }
}
