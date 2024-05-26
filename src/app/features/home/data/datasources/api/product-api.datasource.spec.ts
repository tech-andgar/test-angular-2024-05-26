import { TestBed } from '@angular/core/testing';

import { ProductApiDataSource } from './product-api.datasource';

describe('ProductApiDataSource', () => {
  let service: ProductApiDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductApiDataSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
