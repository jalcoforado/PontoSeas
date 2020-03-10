import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterDatesSchenduleAudience'
})
export class FilterDatesSchenduleAudiencePipe implements PipeTransform {

  transform(value: any, args?: any, args2?: any): any {
    let valueReturn = value;
    if (args != '' && args != undefined) {
      valueReturn = _.filter(valueReturn, row => {
        if (row.scheduledat == null) { return false; }
        return new Date(row.scheduledat.split('T')[0]) >= new Date(args);
      });
    }
    if (args2 != '' && args2 != undefined)
      valueReturn = _.filter(valueReturn, row => {
        if (row.scheduledat == null) { return false; }
        return new Date(row.scheduledat.split('T')[0]) <= new Date(args2);
      });
    return valueReturn
  }
}
