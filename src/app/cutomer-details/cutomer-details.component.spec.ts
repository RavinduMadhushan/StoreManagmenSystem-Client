import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerDetailsComponent } from './cutomer-details.component';

describe('CutomerDetailsComponent', () => {
  let component: CutomerDetailsComponent;
  let fixture: ComponentFixture<CutomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
