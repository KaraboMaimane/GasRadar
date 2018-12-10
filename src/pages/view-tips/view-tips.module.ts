import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewTipsPage } from './view-tips';
import { AccordionComponent } from '../../components/accordion/accordion';

@NgModule({
  declarations: [
    ViewTipsPage,
    AccordionComponent
  ],
  imports: [
    IonicPageModule.forChild(ViewTipsPage),
  ],
})
export class ViewTipsPageModule {}
