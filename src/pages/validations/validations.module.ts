import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidationsPage } from './validations';

@NgModule({
  declarations: [
    ValidationsPage,
  ],
  imports: [
    IonicPageModule.forChild(ValidationsPage),
  ],
  exports: [
    ValidationsPage
  ]
})
export class ValidationsPageModule {}
