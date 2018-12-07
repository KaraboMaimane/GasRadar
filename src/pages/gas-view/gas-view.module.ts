import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GasViewPage } from './gas-view';

@NgModule({
  declarations: [
    GasViewPage,
  ],
  imports: [
    IonicPageModule.forChild(GasViewPage),
  ],
})
export class GasViewPageModule {}
