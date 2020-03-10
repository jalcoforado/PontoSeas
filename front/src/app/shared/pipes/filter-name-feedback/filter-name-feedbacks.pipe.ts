import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'filterNameFeedback'
})
export class FilterNameFeedbackPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args != '' && args != undefined) {
      return _.filter(value, row => {
        if (row.name == null) { return false; }
        return row.name.toLowerCase().indexOf(args.toLowerCase()) !== -1;
      });
    } else {
      return value;
    }
  }

}
