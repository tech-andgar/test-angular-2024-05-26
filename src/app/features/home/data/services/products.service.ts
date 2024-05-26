import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductEntity } from '../../domain/entities/product.entity';
import { GetAllProductsUseCase } from '../../domain/usecases/get_all_contact_usecase';
import { AssociateToTargetUseCase } from '../../domain/usecases/associate_to_target_usecase';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private getAllProductsUseCase: GetAllProductsUseCase,
    private associateToTargetUseCase: AssociateToTargetUseCase,
  ) {}

  private products = new BehaviorSubject<ProductEntity[] | null>(null);
  products$ = this.products.asObservable();

  getAll(useLocal: boolean = false): Observable<ProductEntity[]> {
    return this.getAllProductsUseCase.execute(useLocal);
  }

  associateToTarget(
    product: ProductEntity,
    useLocal: boolean = false,
  ): Observable<ProductEntity> {
    return this.associateToTargetUseCase.execute(product);
  }
}
