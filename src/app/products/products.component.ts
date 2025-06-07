import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true
})
export class ProductsComponent implements OnInit {

  products! : Array<any>
  constructor() { }

  ngOnInit(): void {
    this.products = [
      { id: 1, name: 'Computer', price: 2300, selected: true },
      { id: 2, name: 'Printer', price: 1200, selected: false  },
      { id: 3, name: 'Smart Phone', price: 1100, selected: false  }
    ]
  }

  handleDelete(product: any) {
    let validate = confirm(`Are you sure you want to delete ${product.name}?`);
    if (validate == true) {
      this.products = this.products.filter((p:any) => p.id != product.id);
    }
  }
}
