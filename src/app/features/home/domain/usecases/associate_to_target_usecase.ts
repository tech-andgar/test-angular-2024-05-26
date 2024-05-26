import { Either } from '@utils/either/either';
import { ProductEntity } from '@entities-home/product.entity';
import { Observable } from 'rxjs';
import { ProductsService } from '../../data/services/products.service';

export class AssociateToTargetUseCase {
  productService: ProductsService;

  constructor(productService: ProductsService) {
    this.productService = productService;
  }

  execute(product: ProductEntity,  useLocal: boolean = false): Observable<ProductEntity> {
    return this.productService.associateToTarget(product, useLocal);
  }
}
