import { TestBed } from '@angular/core/testing';

import { MedicinestockService } from './medicinestock.service';

describe('MedicinestockService', () => {
  let service: MedicinestockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicinestockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
