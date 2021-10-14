import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { Supplier } from '../supplier';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('http://localhost:3000/category').subscribe((data: any) => {
      console.log(data);
      this.categories = data;
    });
  }

  addCategoryDetails(): void {
    this.router.navigate(['/new-category']);
  }

}
