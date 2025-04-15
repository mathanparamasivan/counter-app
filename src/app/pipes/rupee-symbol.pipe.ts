import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupeeSymbol'
})
export class RupeeSymbolPipe implements PipeTransform {

  transform(value: number| string): string {
    if (value === null || value === undefined) 
      return '₹ 0';

    return `₹ ${value}`;
  }

}
