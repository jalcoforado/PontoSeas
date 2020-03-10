import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'filterTextFeedbacks'
})
export class FilterTextFeedbacksPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args != '' && args != undefined) {
    return _.filter(value, row => {
      if (row.nps_feedback == null) { return false; }
      return row.nps_feedback.toLowerCase().indexOf(args.toLowerCase()) !== -1;
    });
  } else {
    return value;
  }
  }

}
