import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DieselViewPage } from './diesel-view';

@NgModule({
  declarations: [
    DieselViewPage,
  ],
  imports: [
    IonicPageModule.forChild(DieselViewPage),
  ],
})
export class DieselViewPageModule {}
