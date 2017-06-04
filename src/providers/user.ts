import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from './api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class User {
  _user: any;

  constructor(public http: Http, public api: Api) {
  }

  getUser() {
    return this._user;
  }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  create(accountInfo: any) {
    let seq = this.api.post('user/create', accountInfo).share();

    seq
      .map(res => res.json())
      .subscribe(res => {
        this._user = res.data;
      }, err => {
        console.error('ERROR', err);
      });

    return seq;
  }

  update(accountInfo: any) {
    let seq = this.api.post('users/' + accountInfo._id, accountInfo).share();

    seq
      .map(res => res.json())
      .subscribe(res => {
        this._user = res.data;
      }, err => {
        console.log('ERROR', err);
      });

    return seq;
  }
}
