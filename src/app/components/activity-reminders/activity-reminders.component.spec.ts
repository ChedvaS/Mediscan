import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityRemindersComponent } from './activity-reminders.component';

describe('ActivityRemindersComponent', () => {
  let component: ActivityRemindersComponent;
  let fixture: ComponentFixture<ActivityRemindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityRemindersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
