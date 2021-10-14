import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-supplierform',
  templateUrl: './supplierform.component.html',
  styleUrls: ['./supplierform.component.css'],
})
export class SupplierformComponent implements OnInit {
  supplierForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.supplierForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      streetAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postCode: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contactPerson: ['', [Validators.required]],
      contactNumber: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.http
      .post('http://localhost:3000/supplier', this.supplierForm.value)
      .subscribe((response) => {
        console.log(response);
        this.messageService.add({
          severity: 'success',
          summary: 'Supplier Details',
          detail: 'Saved Successfully',
          key: 't1',
        });

        this.router.navigate(['/suppliers']);
      });
  }
}
