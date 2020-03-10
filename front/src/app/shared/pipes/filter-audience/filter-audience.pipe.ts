import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterAudience'
})
export class FilterAudiencePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args != '' && args != undefined) {
      const filterId = _.filter(value, row => {
        if (row.id_survey_audience == null) { return false; }
        return row.id_survey_audience.toString().indexOf(args.toString()) !== -1;
      });
      if (filterId.length > 0)
        return filterId
      const filterName = _.filter(value, row => {
        if (row.name == null) { return false; }
        return row.name.toLowerCase().indexOf(args.toLowerCase()) !== -1;
      });
      if (filterName.length > 0)
        return filterName
      const filterContact = _.filter(value, row => {
        if (row.participant_key == null) { return false; }
        return row.participant_key.toLowerCase().indexOf(args.toLowerCase()) !== -1;
      });
      if (filterContact.length > 0)
        return filterContact
    } else {
      return value;
    }
  }

}
