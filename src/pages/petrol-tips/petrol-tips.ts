import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-petrol-tips',
  templateUrl: 'petrol-tips.html',
})
export class PetrolTipsPage {
  
    shownGroup = null;
    constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetrolTipsPage');
  }
  close(){
    this.view.dismiss();
  }
}
