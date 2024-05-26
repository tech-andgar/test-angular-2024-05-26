import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsRepository } from '@app/features/home/domain/repositories/products-repository';
import { ProductEntity } from '../../domain/entities/product.entity';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private productRepository: ProductsRepository) {}

  getAll(useLocal: boolean = false): Observable<ProductEntity[]> {
    return this.productRepository.getAllProducts(useLocal);
  }

  associateToTarget(
    product: ProductEntity,
    useLocal: boolean = false
  ): Observable<ProductEntity> {
    return this.productRepository.associateToTarget(product, useLocal);
  }
}
