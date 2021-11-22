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
  loading!: boolean;

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
    this.loading = true;
    this.http.get('http://localhost:3000/item').subscribe((data: any) => {
      if (data.length > 0) {
        this.http
          .post('http://34.121.6.202:5000/api/price/prediction', {
            item_id: 'aaa',
          })
          .subscribe((datas: any) => {
            console.log(datas);
            // this.price = datas;
            for (let index = 0; index < data.length; index++) {
              const element = data[index];
              element.predictedPrice = datas.new_prediction;
            }
            this.itemz = data;
            this.loading = false;
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
