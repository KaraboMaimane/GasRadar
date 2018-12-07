import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-diesel-view',
  templateUrl: 'diesel-view.html',
})
export class DieselViewPage {
  
    shownGroup = null;
  constructor(public navCtrl: NavController, private view: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DieselViewPage');
  }
  close(){
    this.view.dismiss();
  }
}
