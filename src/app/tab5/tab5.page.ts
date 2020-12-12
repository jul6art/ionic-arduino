import {Component} from '@angular/core';
import {IpService} from '../services/ip.service';
import {Observable} from 'rxjs';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  DecibelsState: boolean;
  DecibelsValue: number;

  ip$: Observable<string | null>;
  ip: string|null = null;

  constructor(private http: HTTP, private ipService: IpService) {
    this.DecibelsValue = 0;
  }

  call(path: string, state: boolean|null, value: boolean|null): void
  {
    let url: string = 'http://' + this.ip + '/' + path;

    if (null !== state) {
      url += '/' + (state ? 1 : 0);
    }

    if (null !== value) {
      url += '/VALUE';
    }

    this.http.get(url, {}, {})
        .then(data => {
          if (null === value) {
            if (state === null) {
              state = (parseInt(data.data) === 1);
            }

            if (path === 'DECIBELS') {
              this.DecibelsState = state;
            }
          } else {
            this.DecibelsValue = data.data;
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

    this.call('DECIBELS', null, null);

    const decibelsTimeout = setInterval(() => {
      if (this.DecibelsState) {
        this.call('DECIBELS', null, true);
      }
    }, 1000);
  }
}
