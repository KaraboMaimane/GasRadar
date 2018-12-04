import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab3Root: string;
  // tab2Root: string;
  tab1Root: string;

  constructor(){
    this.tab1Root = 'MapPage';
    // this.tab2Root = 'StatsPage';
    this.tab3Root = 'TipsPage';
  }
}
