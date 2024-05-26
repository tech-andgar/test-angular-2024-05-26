import { BaseEntity } from '@domain-core/entity/base-entity';
// import { BaseModel } from'@data-core/model/base-model';
import { ProductLocalModel } from './product-local.model';

// export class ProductResponseLocalModel extends BaseModel {
//   listCard: ProductLocalModel[];

//   constructor(listCard: ProductLocalModel[]) {
//     super();
//     this.listCard = listCard;
//   }

//   toEntity(): BaseEntity {
//     throw new Error('Method not implemented.');
//   }

//   static fromJson(jsonData: any): ProductResponseLocalModel {
//     const listCard = jsonData.listCard || [];

//     return listCard.map((item: any) => ProductLocalModel.fromJson(item));
//   }

//   /**
//    * Converts JSON data to an array of ProductLocalModel.
//    */
//   fromJson(jsonData: any): this {
//     throw new Error('Method not implemented.');
//   }
//   /**
//    * Converts an array of ProductLocalModel to JSON data.
//    */
//   toJson() {
//     const listCard = this.listCard.map((product) => ({
//       nameProduct: product.nameProduct,
//       numberProduct: product.numberProduct,
//       balanceProduct: product.balanceProduct,
//       detaildProduct: product.detaildProduct,
//     }));

//     return { listCard };
//   }

// }

export interface ProductResponseLocalModel {
  listCard: ProductLocalModel[];
}
