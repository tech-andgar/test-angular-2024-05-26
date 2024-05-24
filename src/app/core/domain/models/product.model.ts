interface IProduct {
  nameProduct: string;
  numberProduct: string;
  balanceProduct: string;
  detaildProduct: string;
}

export class Product implements IProduct {
  nameProduct: string;
  numberProduct: string;
  balanceProduct: string;
  detaildProduct: string;

  constructor({
    nameProduct,
    numberProduct,
    balanceProduct,
    detaildProduct,
  }: IProduct) {
    this.nameProduct = nameProduct;
    this.numberProduct = numberProduct;
    this.balanceProduct = balanceProduct;
    this.detaildProduct = detaildProduct;
  }
}
