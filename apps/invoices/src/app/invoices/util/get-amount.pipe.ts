import { Pipe, PipeTransform } from '@angular/core';
import { LineItem } from '@invoices/api-interfaces';

@Pipe({
  name: 'getAmount'
})
export class GetAmountPipe implements PipeTransform {

  transform(lineItems: LineItem[]): number {
    return lineItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
