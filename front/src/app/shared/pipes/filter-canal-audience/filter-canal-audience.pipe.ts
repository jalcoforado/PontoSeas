import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'filterCanalAudience'
})
export class FilterCanalAudiencePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args !== '' && args != undefined) {
      return _.filter(value, row => {
        if (row.channel == null) { return false; }
        return row.channel.toString().indexOf(args.toString()) !== -1;
      });
    } else {
      return value;
    }
  }

}
