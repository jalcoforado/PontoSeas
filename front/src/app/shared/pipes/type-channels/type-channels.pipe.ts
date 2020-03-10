import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeChannels'
})
export class TypeChannelsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value){
      case 5:
        return 'Erro';
      case 4:
        return 'Chatbot';
      case 3:
        return 'WebSite';
      case 2:
        return 'SMS';
      case 1:
        return 'Email';
      case 0:
        return 'WhatsApp';
    }
  }

}
