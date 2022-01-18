import { Component } from '@angular/core';
//import { RestService } from './rest.service';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  respuesta: any;

  readonly VAPID_PUBLIC_KEY = "BBa2biKlbzt2xgurSQxMj_B7LzmEHlySrVYDFNb-HuWolC38Oovz1mlzOzBvp-YH-TYpqNf5ClTDFOSm1Xtx68Q";

  constructor(private swPush: SwPush/*, private restService: RestService*/) {}

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(respuesta => {
      this.respuesta = respuesta;
    }).catch(err => {
      this.respuesta = err;
    });
  }
}
