import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import {settings} from '../shared/settings.constant';
import {Observable} from 'rxjs';
import {IpService} from '../services/ip.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  D1State: boolean;
  D2State: boolean;
  D3State: boolean;

  ip$: Observable<string | null>;
  ip: string|null = null;

  constructor(private http: HTTP, private ipService: IpService) {
  }

  call(path: string, state: boolean|null): void
  {
    let url: string = 'http://' + this.ip + '/' + path;

    if (null !== state) {
      url += '/' + (state ? 1 : 0);
    }

    this.http.get(url, {}, {})
        .then(data => {
          console.log(data.status);
          console.log(data.data); // data received by server
          console.log(data.headers);

          if (state === null) {
            state = (parseInt(data.data) === 1);
          }

          if (path === 'D1') {
            this.D1State = state;
          } else if (path === 'D2') {
            this.D2State = state;
          } else {
            this.D3State = state;
          }
        })
        .catch(error => {

          alert('server down');

          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
        });
  }

    ionViewWillEnter() {
        this.ip$ = this.ipService.watchIp();

        this.ip$.subscribe(ip => {
            if (ip !== null) {
                this.ip = ip;
            }
        });

        this.call('D1', null);
        this.call('D2', null);
        this.call('D3', null);
    }
}
