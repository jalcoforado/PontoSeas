import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'filterContactsFeedbacks'
})
export class FilterContactsFeedbacksPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args != '' && args != undefined) {
    return _.filter(value, row => {
      if (row.participant_key == null) { return false; }
      return row.participant_key.toLowerCase().indexOf(args.toLowerCase()) !== -1;
    });
  } else {
    return value;
  }
  }

}
