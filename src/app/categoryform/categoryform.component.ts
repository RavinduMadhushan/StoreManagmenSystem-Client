import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-categoryform',
  templateUrl: './categoryform.component.html',
  styleUrls: ['./categoryform.component.css']
})
export class CategoryformComponent implements OnInit {
  categoryForm!: FormGroup;
  constructor( private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {

    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
   
    });
  }

  onSubmit(): void {

    console.log(this.categoryForm.value)
    this.http
      .post('http://localhost:3000/category', this.categoryForm.value)

      .subscribe((response) => {
        console.log(response);
        this.messageService.add({
          severity: 'success',
          summary: 'Category',
          detail: 'Saved Successfully',
          key: 't1',
        });

        this.router.navigate(['/categories']);
      });
  }

}
