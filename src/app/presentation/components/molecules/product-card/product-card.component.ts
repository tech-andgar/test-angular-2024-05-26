import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@domain/models/product.model';
import { CurrencyWithUnitPipe } from '@core/utils/pipe/currency/currency.pipe';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyWithUnitPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  isChecked: boolean = false;
  @Input()
  product: Product = new Product({
    nameProduct: '',
    numberProduct: '',
    balanceProduct: '',
    detaildProduct: '',
  });
  @Input() selectedProduct!: Product | null;
  @Output() checkboxChange = new EventEmitter<boolean>();
  onCheckboxChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.checkboxChange.emit(checkbox.checked);
  }
}
