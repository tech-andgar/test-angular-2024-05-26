import { ProductsRepository } from '@app/features/home/domain/repositories/products-repository';
import { ProductEntity } from '@entities-home/product.entity';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
// import { ProductApiDataSource } from '../datasources/api/product-api.datasource';
import { ProductLocalDataSource } from '../datasources/local/product-local.datasource';
// import { ProductLocalModel } from '../datasources/local/models/product-local.model';
import { ProductResponseAPI } from '../datasources/api/models/product-response-api.model';
import { ProductAPIModel } from '../datasources/api/models/product-api.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { ProductsImplementationRepositoryMapper } from '../datasources/api/product-implementation-repository.mapper';

@Injectable({
  providedIn: 'root',
})
export class ProductsImplementationRepository extends ProductsRepository {
  userMapper = new ProductsImplementationRepositoryMapper();

  constructor(
    private http: HttpClient,
    // private apiDataSource: ProductApiDataSource,
    private localDataSource: ProductLocalDataSource,
  ) {
    super();
  }

  products: Array<ProductEntity> = [];

  associateToTarget(
    product: ProductEntity,
    useLocal: boolean = false,
  ): Observable<ProductEntity> {
    return this.http.get<ProductEntity>(`${environment.apiUrl}`);

    // return Either.right(product);
  }

  getAllProducts(useLocal: boolean = false): Observable<ProductEntity[]> {
    return this.http
      .get<ProductResponseAPI>(`${environment.apiUrl}`)
      .pipe(map((response) => response.listCard.map(this.userMapper.mapTo)));

    // let products = useLocal
    //   ? this.localDataSource.fetchAll().pipe(
    //       // catchError(this.handleError<ProductEntity[]>('getHeroes', []))
    //       map((data) => {
    //         return data.listCard.map((product: ProductLocalModel) =>
    //           product.toEntity()
    //         );
    //         // catchError(this.handleError<ProductEntity[]>('getHeroes', []));
    //       })
    //     )
    //   : this.apiDataSource.fetchAll().pipe(
    //       map((response: ProductResponseAPI) => {
    //         return response.listCard.map((product: ProductAPIModel) =>
    //           product.toEntity()
    //         );
    //       })
    //     );

    // products.subscribe((data: ProductEntity[]) => {
    //   console.log(data);
    //   this.products = data;
    // });

    // return products;

    // return this.products.length === 0
    //   ? Either.left(Error('No this.products found'))
    //   : Either.right(this.products);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  //   /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  *
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };

  // }

  // /** Log a HeroService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }
}
