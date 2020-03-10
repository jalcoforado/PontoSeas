import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeStatusAudience'
})
export class TypeStatusAudiencePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value){
      case 5:
        return 'Respondido';
      case 4:
        return 'Aberto';
      case 3:
        return 'Visualizado';
      case 2:
        return 'Enviado';
      case 1:
        return 'Erro';
      case 0:
        return 'Pendente';
    }
  }

}
