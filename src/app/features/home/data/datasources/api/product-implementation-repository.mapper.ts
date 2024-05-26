import { ProductEntity as ProductEntity } from '@app/features/home/domain/entities/product.entity';
import { ProductAPIModel as ProductAPIModel } from './models/product-api.model';
import { Mapper } from '@app/core/base/mapper';

export class ProductsImplementationRepositoryMapper extends Mapper<
  ProductEntity,
  ProductAPIModel
> {
  mapFrom(param: ProductEntity): ProductAPIModel {
    return {
      nameProduct: param.name,
      numberProduct: param.number,
      balanceProduct: param.balance,
      detaildProduct: param.detail,
    };
  }

  mapTo(param: ProductAPIModel): ProductEntity {
    return {
      name: param.nameProduct,
      number: param.numberProduct,
      balance: param.balanceProduct,
      detail: param.detaildProduct,
    };
  }
}
