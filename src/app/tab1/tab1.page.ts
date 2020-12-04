import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  ip1: number;
  ip2: number;
  ip3: number;
  ip4: number;

  constructor(private http: HTTP) {
    this.ip1 = 192;
    this.ip2 = 168;
    this.ip3 = 0;
    this.ip4 = 8;

    this.call('D1', false);
    this.call('D2', false);
    this.call('D3', false);
  }

  public call(light: string, enabled: boolean): void
  {
    const url = 'http://' + this.ip1 + '.' + this.ip2 + '.' + this.ip3 + '.' + this.ip4 + '/' + light + '/' + (enabled ? 1 : 0);

    console.log(enabled);
    console.log(url);

    this.http.get(url, {}, {})
        .then(data => {

          console.log(data.status);
          console.log(data.data); // data received by server
          console.log(data.headers);

        })
        .catch(error => {

          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);

        });
  }
}
