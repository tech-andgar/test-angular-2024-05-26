import { ProductEntity } from '@entities-home/product.entity';
import { Observable } from 'rxjs';
import { ProductsService } from '../../data/services/products.service';
import { UseCase } from '@app/core/base/use-case';
import { ProductsRepository } from '../repositories/products-repository';

/**
 * Use case for getting all products.
 */
export class GetAllProductsUseCase
  implements UseCase<boolean, ProductEntity[]>
{
  constructor(private productsRepository: ProductsRepository) {}

  /**
   * Executes the use case to get all products.
   * @param useLocal - A boolean flag indicating whether to use local products or not.
   * @returns An Observable of an array of ProductEntity objects.
   */
  execute(useLocal: boolean = false): Observable<ProductEntity[]> {
    let products = this.productsRepository.getAllProducts(useLocal);
    return products;
  }
}
