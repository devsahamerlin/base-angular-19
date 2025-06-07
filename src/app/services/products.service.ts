import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

let baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(`${baseUrl}/products`)
  }

  deleteProduct(product: any){
    return this.http.delete(`${baseUrl}/products/${product.id}`)
  }
}
