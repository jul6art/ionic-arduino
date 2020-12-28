import {Component} from '@angular/core';
import {IpService} from '../services/ip.service';
import {Observable} from 'rxjs';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  ClockState: boolean;
  ClockTimeout: any;
  ClockValue: string;
  Percent: number;

  ip$: Observable<string | null>;
  ip: string|null = null;

  constructor(private http: HTTP, private ipService: IpService) {
    this.ClockValue = '';
    this.Percent = 0;
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

            this.ClockState = state;
          } else {
            const ClockValueChars = [];
            data.data.split(':').forEach((timePart: string) => {
              if (timePart.length === 1) {
                ClockValueChars.push('0');
              }

              timePart.split('').forEach((timePartChar: string) => {
                ClockValueChars.push(timePartChar);
              });
            });

            this.Percent = parseInt(ClockValueChars[4] + ClockValueChars[5]) * 100 / 60 ;
            this.ClockValue = ClockValueChars.join('').substr(0, 2) + ':' + ClockValueChars.join('').substr(2, 2);
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

    this.call('CLOCK', null, null);

    this.ClockTimeout = setInterval(() => {
      if (this.ClockState) {
        this.call('CLOCK', null, true);
      }
    }, 1000);
  }

  ionViewDidLeave() {
    clearInterval(this.ClockTimeout);
  }
}
