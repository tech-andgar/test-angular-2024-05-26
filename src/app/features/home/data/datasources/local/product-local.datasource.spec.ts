import { TestBed } from '@angular/core/testing';

import { ProductLocalDataSource } from './product-local.datasource';

describe('ProductLocalDataSource', () => {
  let service: ProductLocalDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductLocalDataSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
