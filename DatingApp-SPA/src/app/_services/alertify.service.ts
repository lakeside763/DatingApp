import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, function(e) {
      if (e) {
        okCallback();
      } else { }
    });
  }




  success(message: string) {
    alertify.success(message, alertify.set('notifier', 'position', 'top-center'));
  }

  error(message: string) {
    alertify.error(message, alertify.set('notifier', 'position', 'top-center'));
  }

  warning(message: string) {
    alertify.warning(message);
  }

  info(message: string) {
    alertify.info(message);
  }

  message(message: string) {
    alertify.message(message);
  }

}
