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

  products: any
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() : void {
    this.productsService.getAllProducts().subscribe({
      next: resp => {
        this.products = resp;
      }
      , error: err => {
        console.error('Error fetching products:', err);
      }
    });
  }


  handleDelete(product: any): void {
    let validate = confirm(`Are you sure you want to delete ${product.name}?`);
    if (validate == true) {
      this.productsService.deleteProduct(product).subscribe({
        next: () => {
          console.log('Product deleted successfully');
          this.getAllProducts();
        }
        , error: (error: any) => {
          console.error('Error deleting product:', error);
        }
      });
    }
  }
}
