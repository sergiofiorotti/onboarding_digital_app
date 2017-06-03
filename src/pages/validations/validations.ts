import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { MainPage } from '../../pages/pages';
import { ResultPage } from '../result/result';

import { User } from '../../providers/user';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-validations',
  templateUrl: 'validations.html',
})
export class ValidationsPage {

  account: { 
    rg: string, 
    shippingDate: string, 
    name: string, 
    father: string,
    mother: string,
    born: string,
    birthday: string,
    cpf: string
  } = {
    rg: '', 
    shippingDate: '', 
    name: '', 
    father: '',
    mother: '',
    born: '',
    birthday: '',
    cpf: ''
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

  doValidations() {
    // this.user.signup(this.account).subscribe((resp) => {
    //   this.navCtrl.push(MainPage);
    // }, (err) => {

      this.navCtrl.push(ResultPage);
      
    //   let toast = this.toastCtrl.create({
    //     message: this.signupErrorString,
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    // });
  }

}
