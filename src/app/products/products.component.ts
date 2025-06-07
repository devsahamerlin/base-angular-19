import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true
})
export class ProductsComponent implements OnInit {

  products! : Array<any>
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() : void {
    this.products = this.productsService.getAllProducts();
  }


  handleDelete(product: any): void {
    let validate = confirm(`Are you sure you want to delete ${product.name}?`);
    if (validate == true) {
      this.productsService.deleteProduct(product);
      this.getAllProducts();
    }
  }
}
