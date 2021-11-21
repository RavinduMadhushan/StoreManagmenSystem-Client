import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  stocks: Stock[] = [];
  price: any;
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/stock').subscribe((data: any) => {
      this.stocks = data;
      if (data.length != 0) {
        this.http
          .get(
            'http://2344-2402-4000-2280-97f7-1d26-d91a-7ab9-7e1e.ngrok.io/api/price/prediction'
          )
          .subscribe((datas: any) => {
            this.price = datas;
            for (let index = 0; index < this.stocks.length; index++) {
              const element = this.stocks[index];
              element.predictedQuantity = this.price;
            }
          });
      }
    });
  }
}
