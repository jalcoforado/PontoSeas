import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastAlert(textAlert: string, typeAlert: any) {
    const Toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    Toast({
      type: typeAlert,
      title: textAlert
    });
  }

  swalAlert(title: string, textAlert: string, typeAlert: any) {
    swal({
      title: title,
      text: textAlert,
      type: typeAlert,
    // tslint:disable-next-line: no-unused-expression
    }), function() {
      // tslint:disable-next-line: deprecation
      swal.close();
    };
  }

  modalWait(titleWait:string, textWait: string){
    swal({
      title: titleWait,
      text: textWait,
      onOpen: function () {
        swal.showLoading()
      }})
  }

  close(){
    swal.close();
  }
}
