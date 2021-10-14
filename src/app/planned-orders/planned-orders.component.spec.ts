import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedOrdersComponent } from './planned-orders.component';

describe('PlannedOrdersComponent', () => {
  let component: PlannedOrdersComponent;
  let fixture: ComponentFixture<PlannedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannedOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
