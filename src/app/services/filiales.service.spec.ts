import { TestBed } from '@angular/core/testing';

import { FilialesService } from './filiales.service';

describe('FilialesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilialesService = TestBed.get(FilialesService);
    expect(service).toBeTruthy();
  });
});
