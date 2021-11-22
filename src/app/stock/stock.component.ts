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
  loading!: boolean;
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.loading = true;
    this.http.get('http://localhost:3000/stock').subscribe((data: any) => {
      // this.stocks = data;
      if (data.length > 0) {
        this.http
          .post('http://34.121.6.202:5000/api/inventory/prediction', {
            item_id: 'aaa',
          })
          .subscribe((datas: any) => {
            console.log(datas.new_prediction);
            this.price = datas;
            for (let index = 0; index < data.length; index++) {
              const element = data[index];
              element.predictedQuantity = this.price.new_inventory_prediction;
            }
            this.stocks = data;
            this.loading = false;
          });
      }
    });
  }
}
