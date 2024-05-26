import { Component, OnInit } from '@angular/core';
import { ProductLocalDataSource } from '@app/features/home/data/datasources/local/product-local.datasource';
import { ProductsRepositoryImpl } from '@app/features/home/data/repositories/products-repository-impl';
import { ProductsService } from '@app/features/home/data/services/products.service';
import { ProductEntity } from '@app/features/home/domain/entities/product.entity';
import { ProductCardComponent } from '@app/features/home/presentation/components/components';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: [ProductsService, ProductLocalDataSource],
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAll(true).subscribe((data: ProductEntity[]) => {
      this.dataProducts = data;
    });
  }

  constructor(private productService: ProductsService) {}

  dataProducts: ProductEntity[] = [];

  onSubmit() {}

  selectedProduct: ProductEntity | null = null;

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
