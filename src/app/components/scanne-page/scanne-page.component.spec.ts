import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannePageComponent } from './scanne-page.component';

describe('ScannePageComponent', () => {
  let component: ScannePageComponent;
  let fixture: ComponentFixture<ScannePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScannePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
