import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-gas-view',
  templateUrl: 'gas-view.html',
})
export class GasViewPage {
   
  shownGroup = null;
  constructor(public navCtrl: NavController, private view: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GasViewPage');
  }
  close(){
    this.view.dismiss();
  }
}
