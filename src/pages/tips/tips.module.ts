import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipsPage } from './tips';
import { ChatboxComponent } from '../../components/chatbox/chatbox';

@NgModule({
  declarations: [
    TipsPage,
    ChatboxComponent
  ],
  imports: [
    IonicPageModule.forChild(TipsPage),
  ],
})
export class TipsPageModule {}
