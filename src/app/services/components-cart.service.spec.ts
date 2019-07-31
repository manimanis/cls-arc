import { TestBed } from '@angular/core/testing';

import { ComponentsCartService } from './components-cart.service';

describe('ComponentsCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentsCartService = TestBed.get(ComponentsCartService);
    expect(service).toBeTruthy();
  });
});
