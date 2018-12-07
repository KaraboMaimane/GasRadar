import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { LoginPage } from '../login/login';

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
  }

  ionViewDidLoad(){
    this.check();
  }

  ionViewDidEnter(){
    this.ionViewDidLoad();
  }

  check(){
    this.database.getUserState().then((data)=>{
      if (data == 1){
        this.database.getuser().then((data)=>{
          console.log(data);
          
        })
        console.log('user is online')
      }
      if (data == 0){
        console.log('user is offline')
      }
    })
  }
}
