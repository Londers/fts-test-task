import { TestBed } from '@angular/core/testing';

import { CartListService } from './cart-list.service';

describe('ShopListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartListService = TestBed.get(CartListService);
    expect(service).toBeTruthy();
  });
});
