import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typesContact'
})
export class TypesContactPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args === 0 ? 'Company' : 'Person';
  }

}
