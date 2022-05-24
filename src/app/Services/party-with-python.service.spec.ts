import { TestBed } from '@angular/core/testing';

import { PartyWithPythonService } from './party-with-python.service';

describe('PartyWithPythonService', () => {
  let service: PartyWithPythonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyWithPythonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
