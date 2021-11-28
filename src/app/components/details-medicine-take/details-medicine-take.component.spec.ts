import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMedicineTakeComponent } from './details-medicine-take.component';

describe('DetailsMedicineTakeComponent', () => {
  let component: DetailsMedicineTakeComponent;
  let fixture: ComponentFixture<DetailsMedicineTakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMedicineTakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMedicineTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
