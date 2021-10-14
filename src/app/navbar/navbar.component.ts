import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}
  items!: MenuItem[];
  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/'],
      },
      {
        label: 'Supplier',
        icon: 'pi pi-users',
        routerLink: ['/suppliers'],
      },
      {
        label: 'Customer',
        icon: 'pi pi-users',
        routerLink: ['/customers'],
      },
      {
        label: 'Item',
        icon: 'pi pi-shopping-cart',
        routerLink: ['/items'],
      },
      {
        label: 'Category',
        icon: 'pi pi-shopping-cart',
        routerLink: ['/categories'],
      },
      {
        label: 'Purchases',
        icon: 'pi pi-money-bill',
        routerLink: ['/purchaseLists'],
      },
      {
        label: 'Planned Orders',
        icon: 'pi pi-money-bill',
        routerLink: ['/plannedOrders'],
      },
      {
        label: 'Sales',
        icon: 'pi pi-money-bill',
        routerLink: ['/saleLists'],
      },

      {
        label: 'Stocks',
        icon: 'pi pi-money-bill',
        routerLink: ['/stocks'],
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}
