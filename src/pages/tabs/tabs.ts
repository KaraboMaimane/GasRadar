import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

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
  tab2Root: string;
  tab1Root: string;
  logg:string;

  constructor(public database:DatabaseProvider,public navCtrl: NavController){
    this.tab1Root = 'MapPage';
    this.tab2Root = 'StatsPage';
    this.tab3Root = 'TipsPage';
    this.logg = 'LoginPage';

<<<<<<< HEAD
    
  }

=======
>>>>>>> 4d1b3da886996de30ba9522a8c71b0df1fc96502
  ionViewDidLoad(){
  }
}
