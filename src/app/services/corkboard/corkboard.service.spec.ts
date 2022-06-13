import { TestBed } from '@angular/core/testing';

import { CorkboardService } from './corkboard.service';

describe('CorkboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorkboardService = TestBed.get(CorkboardService);
    expect(service).toBeTruthy();
  });
});
