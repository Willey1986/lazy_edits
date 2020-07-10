import {Pipe, PipeTransform} from '@angular/core';
import {LineItem} from '@invoices/api-interfaces';

@Pipe({
  name: 'getAmount'
})
export class GetAmountPipe implements PipeTransform {

  transform(lineItems: LineItem[]): number {
    //TODO Correct calculation after correcting the model
    return lineItems.reduce((total, item) => total + (item.price /** item.*/), 0);
  }
}
