import { ProductEntity } from '@entities-home/product.entity';
import { Observable } from 'rxjs';

/**
 * Abstract class representing a repository for managing products.
 */
export abstract class ProductsRepository {
  /**
   * Associates a product to a target, based on the `useLocal` parameter.
   *
   * @param product The product entity to be associated.
   * @param useLocal A boolean value indicating whether to use the local database or not.
   * @returns An Observable of the associated product entity.
   */
  abstract associateToTarget(
    product: ProductEntity,
    useLocal: boolean
  ): Observable<ProductEntity>;

  /**
   * Retrieves all products from the repository, based on the `useLocal` parameter.
   *
   * @param useLocal A boolean value indicating whether to use the local database or not.
   * @returns An Observable of an array of product entities.
   */
  abstract getAllProducts(useLocal: boolean): Observable<Array<ProductEntity>>;

  // getById(id: number, useLocal: boolean = false): Observable<Person> {
  //   return useLocal ? this.localDataSource.fetchById(id) : this.apiDataSource.fetchById(id);
  // }

  // create(person: Person, useLocal: boolean = false): Observable<Person> {
  //   return useLocal ? this.localDataSource.add(person) : this.apiDataSource.add(person);
  // }
}
