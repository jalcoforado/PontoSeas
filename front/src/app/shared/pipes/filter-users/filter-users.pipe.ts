import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterUsers'
})

export class FilterUsersPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
        return _.filter(array, row => row.full_name.indexOf(query) > -1);
    }
    return array;
}

}
