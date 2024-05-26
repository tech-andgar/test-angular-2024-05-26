import { ProductsRepository } from '../domain/repositories/products-repository';
import { AssociateToTargetUseCase } from '../domain/usecases/associate_to_target_usecase';
import { GetAllProductsUseCase } from '../domain/usecases/get_all_contact_usecase';
import { ProductsImplementationRepository } from './repositories/products-repository-impl';

// AssociateToTargetUseCaseFactory

const associateToTargetUseCaseFactory = (productsRepo: ProductsRepository) =>
  new AssociateToTargetUseCase(productsRepo);

export const associateToTargetUseCaseProvider = {
  provide: AssociateToTargetUseCase,
  useFactory: associateToTargetUseCaseFactory,
  deps: [ProductsRepository],
};

// GetAllProductsUseCaseFactory

const getAllProductsUseCaseFactory = (productsRepo: ProductsRepository) =>
  new GetAllProductsUseCase(productsRepo);

export const getUserProfileUseCaseProvider = {
  provide: GetAllProductsUseCase,
  useFactory: getAllProductsUseCaseFactory,
  deps: [ProductsRepository],
};

// DI

export const productImplementationRepositoryProvider = {
  provide: ProductsRepository,
  useClass: ProductsImplementationRepository,
};
