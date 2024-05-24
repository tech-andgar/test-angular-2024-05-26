import { Component } from '@angular/core';
import { Product } from '@app/core/domain/models/product.model';

import { ProductCardComponent } from '@components/components';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  dataProduct: Product[] = [
    new Product({
      nameProduct: 'FIC Efectivo',
      numberProduct: '60000986159',
      balanceProduct: '2120000',
      detaildProduct: '',
    }),
    new Product({
      nameProduct: 'FIC Efectivo',
      numberProduct: '80230098619',
      balanceProduct: '7120000',
      detaildProduct: '',
    }),
    new Product({
      nameProduct: 'Seguro de vida CREA',
      numberProduct: '710000986159',
      balanceProduct: '7120000',
      detaildProduct: '',
    }),
  ];

  onSubmit() {}
}
