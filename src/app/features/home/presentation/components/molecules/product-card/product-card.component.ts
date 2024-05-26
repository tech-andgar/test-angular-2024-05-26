import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductEntity } from '@app/features/home/domain/entities/product.entity';
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
  product: ProductEntity = new ProductEntity({
    name: '',
    number: '',
    balance: '',
    detail: '',
  });
  @Input() selectedProduct!: ProductEntity | null;
  @Output() checkboxChange = new EventEmitter<boolean>();
  onCheckboxChange(event: Event) {
    event.stopPropagation();
    this.isChecked = (event.target as HTMLInputElement).checked;
    this.checkboxChange.emit(this.isChecked);
  }
}
