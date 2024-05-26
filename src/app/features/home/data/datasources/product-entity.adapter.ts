import { BaseEntityAdapter } from '@data-core/base-entity.adapter';
import { BaseModel } from '@data-core/model/base-model';
import { ProductEntity } from '@domain-home/entities/product.entity';
import { ProductLocalModel } from './local/models/product-local.model';
import { ProductAPIModel } from './api/models/product-api.model';

/**
 * Adapter class to convert ProductAPIModel or ProductLocalModel to ProductEntity.
 */
export class ProductEntityAdapter implements BaseEntityAdapter {
  private model: BaseModel;

  constructor(model: ProductAPIModel | ProductLocalModel) {
    this.model = model;
  }

  /**
   * Converts the model to ProductEntity.
   */
  toEntity(): ProductEntity {
    if (this.model instanceof ProductAPIModel) {
      return new ProductEntity({
        name: this.model.nameProduct,
        number: this.model.numberProduct,
        balance: this.model.balanceProduct,
        detail: this.model.detaildProduct,
      });
    } else if (this.model instanceof ProductLocalModel) {
      return new ProductEntity({
        name: this.model.nameProduct,
        number: this.model.numberProduct,
        balance: this.model.balanceProduct,
        detail: this.model.detaildProduct,
      });
    }

    throw new Error('Unsupported model type.');
  }
}
