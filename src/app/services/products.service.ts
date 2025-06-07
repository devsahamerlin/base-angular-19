import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    { id: 1, name: 'Computer', price: 2300, selected: true },
    { id: 2, name: 'Printer', price: 1200, selected: false  },
    { id: 3, name: 'Smart Phone', price: 1100, selected: false  }
  ]
  constructor() { }

  getAllProducts() {
    return this.products;
  }

  deleteProduct(product: any): void {
    this.products = this.products.filter((p:any) => p.id != product.id);
  }
}
