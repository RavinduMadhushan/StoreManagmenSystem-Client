import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Category } from '../category';
import { Item } from './../item';
import { MenuItem } from 'primeng/api';
import {MessageService} from 'primeng/api'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  itemz: Item[] = [];
  items!: MenuItem[];

  selectedItem:any;


  constructor(private router: Router, private http: HttpClient, private messageService: MessageService) {
    this.items = [
      {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct()},
      {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteProduct()}
  ];
  }

  ngOnInit(): void {
 
    this.http.get('http://localhost:3000/item').subscribe((data: any) => {
    this.itemz = data;
    });
  
  }

  addItem(): void {
    this.router.navigate(['/new-item']);
  }

  viewProduct() {
    this.messageService.add({severity: 'info', summary: 'Product Selected' });
}

deleteProduct() {
 
    this.messageService.add({severity: 'info', summary: 'Product Deleted'});
   
}
}
