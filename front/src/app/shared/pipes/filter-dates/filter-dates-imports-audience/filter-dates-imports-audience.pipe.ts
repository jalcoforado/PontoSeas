import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterDatesImportsAudience'
})
export class FilterDatesImportsAudiencePipe implements PipeTransform {

  transform(value: any, args?: any, args2?: any): any {
    let valueReturn = value;
    if (args != '' && args != undefined) {
      valueReturn = _.filter(valueReturn, row => {
        if (row.createdat == null) { return false; }
        return new Date(row.createdat.split('T')[0]) >= new Date(args);
      });
    }
    if (args2 != '' && args2 != undefined)
      valueReturn = _.filter(valueReturn, row => {
        if (row.createdat == null) { return false; }
        return new Date(row.createdat.split('T')[0]) <= new Date(args2);
      });
    return valueReturn
  }

}
