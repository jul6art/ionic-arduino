import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {settings} from '../shared/settings.constant';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor() {
    this.pokeIp(localStorage.getItem('arduino_lights_ip') ?? settings.default_ip);
  }

  ip$ = new BehaviorSubject<string | null>(null);
  watchIp(): Observable<string | null> { return this.ip$; }
  peekIp(): string | null { return this.ip$.value; }
  pokeIp(ip: string): void { this.ip$.next(ip); localStorage.setItem('arduino_lights_ip', ip); }
}
