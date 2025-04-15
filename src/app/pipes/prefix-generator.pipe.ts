import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefixGenerator'
})
export class PrefixGeneratorPipe implements PipeTransform {

  transform(sellerName: string, gender: string, isMarried:boolean): string {

    if(sellerName === null || sellerName === undefined)
      return "Seller Info Not Found"

    let prefix;
    if(gender === 'm')
      prefix =  "Mr.";
    else if(gender === 'f') {
      if(isMarried === true)
        prefix =  "Mrs.";
      else
        prefix =  "Ms.";
    }

    console.log(sellerName,  gender, isMarried);
    return prefix + " " + sellerName;
  }

}
