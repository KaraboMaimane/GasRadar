import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewTipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-tips',
  templateUrl: 'view-tips.html',
})
export class ViewTipsPage implements OnInit{

  color;
  fuels;
  name;
  code;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    console.log(this.navParams.get('name'),this.navParams.get('fuel'),this.navParams.get('color'));
    this.name = this.navParams.get('name');
    this.fuels = this.navParams.get('fuel');
    this.color = this.navParams.get('color');
    this.code = this.navParams.get('code');
  }

}
