import { TestBed } from '@angular/core/testing';

import { TypesContactsService } from './types-contacts.service';

describe('TypesContactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypesContactsService = TestBed.get(TypesContactsService);
    expect(service).toBeTruthy();
  });
});
