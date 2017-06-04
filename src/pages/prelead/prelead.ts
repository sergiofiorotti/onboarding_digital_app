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
    cpf: '',
    email: '',
    phone: ''
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
    this.user.create(this.account).subscribe((resp) => {
      this.navCtrl.push(DocumentsPage, {
        data: resp
      });
    }, (err) => {
      console.log(err);
    });
  }
}
