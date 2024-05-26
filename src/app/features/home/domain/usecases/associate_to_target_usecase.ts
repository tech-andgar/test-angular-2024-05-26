import { ProductEntity } from '@entities-home/product.entity';
import { Observable } from 'rxjs';
import { UseCase } from '@app/core/base/use-case';
import { ProductsRepository } from '../repositories/products-repository';

export class AssociateToTargetUseCase
  implements UseCase<ProductEntity, ProductEntity>
{
  constructor(private productsRepository: ProductsRepository) {}

  execute(
    product: ProductEntity,
    useLocal: boolean = false,
  ): Observable<ProductEntity> {
    return this.productsRepository.associateToTarget(product, useLocal);
  }
}
