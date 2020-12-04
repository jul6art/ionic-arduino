import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { colors } from '../shared/colors.constant';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  constructor(public toastController: ToastController) { }

  public async addFlash(
      message: string, color: string = colors.success, position: 'top'|'bottom'|'middle' = 'top', duration: number = 2000
  ) {
    const toast = await this.toastController.create({
      message: message,
      position: position,
      color: color,
      duration: duration
    });

    toast.present();
  }
}
