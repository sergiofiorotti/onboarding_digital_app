import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { MainPage } from '../../pages/pages';
import { DocumentsPage } from '../documents/documents';

import { User } from '../../providers/user';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-prelead',
  templateUrl: 'prelead.html',
})
export class PreleadPage {

  account: { cpf: string, email: string, phone: string } = {
    cpf: '11.222.333-44',
    email: 'test@example.com',
    phone: '(11) 99999-9999'
  };
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doPreLead() {
    // this.user.signup(this.account).subscribe((resp) => {
    //   this.navCtrl.push(MainPage);
    // }, (err) => {

      this.navCtrl.push(DocumentsPage);
      
    //   let toast = this.toastCtrl.create({
    //     message: this.signupErrorString,
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    // });
  }

}
