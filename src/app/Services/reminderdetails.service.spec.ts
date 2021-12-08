import { TestBed } from '@angular/core/testing';

import { ReminderdetailsService } from './reminderdetails.service';

describe('ReminderdetailsService', () => {
  let service: ReminderdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReminderdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
