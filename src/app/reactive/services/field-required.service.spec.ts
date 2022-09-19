import { TestBed } from '@angular/core/testing';

import { FieldRequiredService } from './field-required.service';

describe('FieldRequiredService', () => {
  let service: FieldRequiredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldRequiredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
