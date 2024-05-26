// import { ProductEntity } from '@app/features/home/domain/entities/product.entity';
// // import { ProductEntityAdapter } from '../../product-entity.adapter';
// import { BaseModel } from'@data-core/model/base-model';

// export class ProductLocalModel extends BaseModel {
//   nameProduct: string;
//   numberProduct: string;
//   balanceProduct: string;
//   detaildProduct: string;

//   constructor({
//     nameProduct,
//     numberProduct,
//     balanceProduct,
//     detaildProduct,
//   }: {
//     nameProduct: string;
//     numberProduct: string;
//     balanceProduct: string;
//     detaildProduct: string;
//   }) {
//     super();
//     this.nameProduct = nameProduct;
//     this.numberProduct = numberProduct;
//     this.balanceProduct = balanceProduct;
//     this.detaildProduct = detaildProduct;
//   }

//   /**
//    * Converts this ProductLocalModel to ProductEntity using an adapter.
//    */
//   toEntity(): ProductEntity {
//     return new ProductEntityAdapter(this).toEntity();
//   }

//   /**
//    * Converts JSON data to an object of ProductLocalModel.
//    */
//   static fromJson(jsonData: any): ProductLocalModel {
//     return new ProductLocalModel({
//       nameProduct: jsonData.nameProduct,
//       numberProduct: jsonData.numberProduct,
//       balanceProduct: jsonData.balanceProduct,
//       detaildProduct: jsonData.detaildProduct,
//     });
//   }

//   override fromJson(data: any): BaseModel {
//     throw new Error('Method not implemented.');
//   }

//   toJson() {
//     return {
//       nameProduct: this.nameProduct,
//       numberProduct: this.numberProduct,
//       balanceProduct: this.balanceProduct,
//       detaildProduct: this.detaildProduct,
//     };
//   }
// }

export interface ProductLocalModel {
  nameProduct: string;
  numberProduct: string;
  balanceProduct: string;
  detaildProduct: string;
}
