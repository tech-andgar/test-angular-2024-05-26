import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@data-home/services/products.service';
import { ProductEntity } from '@domain-home/entities/product.entity';
import { ProductCardComponent } from '@components/components';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: [ProductsService],
})
export class MainComponent implements OnInit {
  constructor(public productService: ProductsService) {}
  dataProducts: ProductEntity[] | any[] | null = {} as ProductEntity[];
  selectedProduct: ProductEntity | null = null;

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.products$.subscribe({
      next: (products) => {
        this.dataProducts = products;
      },
    });
    this.productService.getAll().subscribe({
      next: (responseData) => {
        this.dataProducts = responseData;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
      complete: () => {
        console.log('HTTP request complete');
      },
    });
  }

  onSubmit() {}

  onProductSelect(product: ProductEntity, isChecked: boolean) {
    if (isChecked) {
      this.selectedProduct = product;
    } else {
      if (this.selectedProduct === product) {
        this.selectedProduct = null;
      }
    }
  }
}
