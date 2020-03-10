import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterStatusAudience'
})
export class FilterStatusAudiencePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args !== '' && args != undefined) {
      return _.filter(value, row => {
        if (row.status_message == null) { return false; }
        return row.status_message.toString().indexOf(args.toString()) !== -1;
      });
    } else {
      return value;
    }
  }

}
