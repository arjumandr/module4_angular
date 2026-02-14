import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    products: Product[] = [];
    loading = true;

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
      this.productService.getAllProducts().subscribe({
        next: (data) => {
          this.products = data;
          this.loading = false;
        },
        error: (err) => {
          console.log('Error fetching products: ', err);
          this.loading = false;
        }
      });
    }
}
