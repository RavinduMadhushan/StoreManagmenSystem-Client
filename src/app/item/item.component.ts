import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Category } from '../category';
import { Item } from './../item';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  itemz: Item[] = [];
  items!: MenuItem[];

  selectedItem: Item | undefined;
  price: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.items = [
      {
        label: 'View',
        icon: 'pi pi-fw pi-search',
        command: () => this.viewProduct(),
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        command: () => this.editProduct(),
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-times',
        command: () => this.deleteProduct(),
      },
    ];
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/item').subscribe((data: any) => {
      this.itemz = data;
      if (data.length != 0) {
        this.http
          .get(
            'http://2344-2402-4000-2280-97f7-1d26-d91a-7ab9-7e1e.ngrok.io/api/price/prediction'
          )
          .subscribe((datas: any) => {
            this.price = datas;
            for (let index = 0; index < this.itemz.length; index++) {
              const element = this.price[index];
              element.predictedPrice = this.price;
            }
          });
      }
    });
  }

  addItem(): void {
    this.router.navigate(['/new-item']);
  }

  viewProduct() {
    this.messageService.add({ severity: 'info', summary: 'Product Selected' });
  }

  editProduct() {
    this.router.navigate(['/new-item', { id: this.selectedItem?.id }]);
  }

  deleteProduct() {
    this.messageService.add({ severity: 'info', summary: 'Product Deleted' });
  }
}
