import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandWritMedicineComponent } from './hand-writ-medicine.component';

describe('HandWritMedicineComponent', () => {
  let component: HandWritMedicineComponent;
  let fixture: ComponentFixture<HandWritMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandWritMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandWritMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
