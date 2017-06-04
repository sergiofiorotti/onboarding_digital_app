import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { NavController, ToastController, NavParams } from 'ionic-angular';

import { ValidationsPage } from '../validations/validations';

import { User } from '../../providers/user';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-documents',
  templateUrl: 'documents.html',
})
export class DocumentsPage {

  private signupErrorString: string;
  data: any;
  id: any;

  public photos : any;
  public base64Image : string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public navParams: NavParams, private camera : Camera) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })

    this.data = navParams.get("data");
    this.data.body = JSON.parse(this.data._body);
    this.id = this.data.body.data._id;
    
    this.photos = [];
  }

  doSaveDocuments() {
    this.user.update({ "photos": this.photos, "_id": this.id }).subscribe((resp) => {
      this.navCtrl.push(ValidationsPage, {
        id: this.id
      });
    }, (err) => {  
    });
  }

  takePhoto() {
    const options : CameraOptions = {
      quality: 50, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options) .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
      }, (err) => {
        console.log(err);
      });
  }
}
