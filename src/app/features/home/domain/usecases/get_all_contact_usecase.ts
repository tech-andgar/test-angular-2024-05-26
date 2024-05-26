import { ProductEntity } from '@entities-home/product.entity';
import { Observable } from 'rxjs';
import { ProductsService } from '../../data/services/products.service';

/**
 * Use case for getting all products.
 */
export class GetAllProductsUseCase {
  productService: ProductsService;

  /**
   * ProductService dependency injection.
   * @param productService - The service responsible for fetching products.
   */
  constructor(productService: ProductsService) {
    this.productService = productService;
  }

  /**
   * Executes the use case to get all products.
   * @param useLocal - A boolean flag indicating whether to use local products or not.
   * @returns An Observable of an array of ProductEntity objects.
   */
  async execute(useLocal: boolean = false): Promise<Observable<ProductEntity[]>> {
    let products = this.productService.getAll(useLocal);
    return products;
  }
}
