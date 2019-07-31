import { TestBed } from '@angular/core/testing';

import { ListeResponsablesService } from './liste-responsables.service';

describe('ListeResponsablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeResponsablesService = TestBed.get(ListeResponsablesService);
    expect(service).toBeTruthy();
  });
});
