import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductResponseAPI } from './models/product-response-api.model';

@Injectable({
  providedIn: 'root',
})
export class ProductApiDataSource {
  private apiUrl =
    'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  constructor(private http: HttpClient) {}

  fetchAll(): Observable<ProductResponseAPI> {
    return this.http.get<ProductResponseAPI>(this.apiUrl);
  }

  // fetchById(id: number): Observable<ProductResponseAPI> {
  //   // TODO: implement fetch by id instead of fetch from server
  //   return this.http.get<ProductResponseAPI>(`${this.apiUrl}/${id}`);
  // }

  // add(product: ProductResponseAPI): Observable<ProductResponseAPI> {
  //   // TODO: implement fetch by id instead of fetch from server
  //   return this.http.post<ProductResponseAPI>(this.apiUrl, product);
  // }
}
