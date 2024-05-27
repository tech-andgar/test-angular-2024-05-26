import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ProductEntity } from '@app/features/home/domain/entities/product.entity';
import { CurrencyWithUnitPipe } from '@core/utils/pipe/currency/currency.pipe';
import { CarouselComponent } from '../../components';

let uniqueId: number = 0;
@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CurrencyWithUnitPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @HostBinding('class.product-card') hostClass = true;

  @HostBinding('id') id = 0;

  constructor(private carousel: CarouselComponent) {
    uniqueId++;

    this.id = uniqueId;
  }

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
