import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css'],
})
export class CustomerformComponent implements OnInit {
  customerForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      contactNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.http
      .post('http://localhost:3000/customer', this.customerForm.value)
      .subscribe((response) => {
        console.log(response);
        this.messageService.add({
          severity: 'success',
          summary: 'Customer Details',
          detail: 'Saved Successfully',
          key: 't1',
        });

        this.router.navigate(['/customers']);
      });
  }
}
