import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from '../services/toastr.service';
import {IpService} from '../services/ip.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  formData: FormGroup;
  ipAddress: string;

  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private router: Router,
      private ipService: IpService) { }

  ngOnInit() {
    this.ipAddress = this.ipService.peekIp();

    this.formData = this.fb.group({
      ip: [this.ipAddress, [this.mustBeValidIp]],
    });
  }

  private mustBeValidIp(c: AbstractControl): { [key: string]: boolean } {
    let rv: { [key: string]: boolean } = {};
    if (!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(c.value)) {
      rv['mustBeValidIp'] = true;
    }
    return rv;
  }

  get ip() {
    return this.formData.get('ip');
  }

  async save() {
    this.ipService.pokeIp(this.formData.get('ip').value);

    this.toastr.addFlash('Adresse IP mise à jour');
    this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });
  }
}
