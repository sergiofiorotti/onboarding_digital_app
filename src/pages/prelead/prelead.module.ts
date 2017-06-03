import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreleadPage } from './prelead';

@NgModule({
  declarations: [
    PreleadPage,
  ],
  imports: [
    IonicPageModule.forChild(PreleadPage),
  ],
  exports: [
    PreleadPage
  ]
})
export class PreleadPageModule {}
