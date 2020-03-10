import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'filterTags'
})
export class FilterTagsPipe implements PipeTransform {

  transform(value: any[], args?: any[]): any {
    if (args.length > 0) {
      return _.filter(value, row => {
        if (row.tags == null) { return false; }
        const valueTags = JSON.parse(row.tags)["Tags"];
        return args.every(element => valueTags.indexOf(element.value) > -1);
      });
    } else {
      return value;
    }
  }

}
