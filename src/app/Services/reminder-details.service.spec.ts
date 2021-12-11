import { TestBed } from '@angular/core/testing';

import { ReminderDetailsService } from './reminder-details.service';

describe('ReminderDetailsService', () => {
  let service: ReminderDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReminderDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
