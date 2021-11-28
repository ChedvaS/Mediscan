import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandWritReminderComponent } from './hand-writ-reminder.component';

describe('HandWritReminderComponent', () => {
  let component: HandWritReminderComponent;
  let fixture: ComponentFixture<HandWritReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandWritReminderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandWritReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
