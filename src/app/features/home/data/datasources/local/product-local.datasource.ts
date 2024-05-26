import { Injectable } from '@angular/core';
import { ProductResponseLocalModel } from './models/product-response-local.model';
import { ProductLocalModel } from './models/product-local.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductLocalDataSource {
  constructor() {}

  _dataJson = `{
    "listCard": [
      {
        "nameProduct": "MFUND",
        "numberProduct": "789654123",
        "balanceProduct": "4000000",
        "detaildProduct": "Ya tienes un 15% de tu objetivo "
      },
      {
        "nameProduct": "CREA",
        "numberProduct": "156123456",
        "balanceProduct": "40000000",
        "detaildProduct": "Ya tienes un 80% de tu objetivo "
      },
      {
        "nameProduct": "FICS",
        "numberProduct": "11213",
        "balanceProduct": "15000",
        "detaildProduct": "Ya tienes un 18% de tu objetivo "
      },
      {
        "nameProduct": "BOLT",
        "numberProduct": "122220",
        "balanceProduct": "50000",
        "detaildProduct": "Ya tienes un 1% de tu objetivo "
      }
    ]
  }`;

  /**
   * Fetches all products from JSON data.
   */
  fetchAll(): Observable<ProductResponseLocalModel> {
    return new Observable<ProductResponseLocalModel>((observer) => {
      const jsonData = JSON.parse(this._dataJson);
      const listCard = jsonData.listCard || [];
      try {
        const products = listCard.map(
          (item: any) => {},
          // ProductLocalModel.fromJson(item)
        );

        observer.next(products);
        observer.complete();
      } catch (error) {
        console.log(error);
      }
    });
  }
}
