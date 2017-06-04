import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';

import { ResultPage } from '../result/result';

import { User } from '../../providers/user';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-validations',
  templateUrl: 'validations.html',
})
export class ValidationsPage {

  account: {
    _id: string,
    rg: string, 
    shippingDate: string, 
    name: string, 
    father: string,
    mother: string,
    born: string,
    birthday: string,
    cpf: string
  } = { 
    _id: '',
    rg: '37.692.760-4', 
    shippingDate: '02/AGO/2008', 
    name: 'MIKAEL MALANSKI SCREMIM', 
    father: 'LUIZ ALBERTO SCREMIN',
    mother: 'MARILSE MALANSKI SCREMIN',
    born: 'CURITIBA -PR',
    birthday: '11/MAR/1990',
    cpf: '395117458/75'
  };

  id: any;

  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public navParams: NavParams) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })

    this.id = navParams.get("id");
  }

  doValidations() {
    this.account._id = this.id;
    this.user.update(this.account).subscribe((resp) => {
      this.navCtrl.push(ResultPage);  
    }, (err) => {
    });
  }

}
