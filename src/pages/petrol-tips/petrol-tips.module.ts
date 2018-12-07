import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetrolTipsPage } from './petrol-tips';

@NgModule({
  declarations: [
    PetrolTipsPage,
  ],
  imports: [
    IonicPageModule.forChild(PetrolTipsPage),
  ],
})
export class PetrolTipsPageModule {}
