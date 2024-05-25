import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyWithUnit',
  standalone: true,
})
export class CurrencyWithUnitPipe implements PipeTransform {
  transform(value: number | string, currencyCode: string = 'COP'): string {
    const formattedCurrency = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: currencyCode,
    }).format(+value);
    return formattedCurrency;
  }
}
