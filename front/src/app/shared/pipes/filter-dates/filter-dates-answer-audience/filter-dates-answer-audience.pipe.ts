import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterDatesAnswerAudience'
})
export class FilterDatesAnswerAudiencePipe implements PipeTransform {

  transform(value: any, args?: any, args2?: any): any {
    let valueReturn = value;
    if (args != '' && args != undefined) {
      valueReturn = _.filter(valueReturn, row => {
        if (row.answeredat == null) { return false; }
        return new Date(row.answeredat.split('T')[0]) >= new Date(args);
      });
    }
    if (args2 != '' && args2 != undefined)
      valueReturn = _.filter(valueReturn, row => {
        if (row.answeredat == null) { return false; }
        return new Date(row.answeredat.split('T')[0]) <= new Date(args2);
      });
    return valueReturn
  }

}
