import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {
  info;
  oil;
  SaCurrency;
  gas;
  CrudeOil;

  constructor(public http: HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
    this.apiKey()
  }

  apiKey(){
    let key = "http://www.apilayer.net/api/live?access_key=0d2ab54aa940e5b82dc37bb63cb3db36&currencies=USD,GBP,ARS,ZAR&format=1";
    return new Promise((accpt,rej)=>{
      this.http.get(key).subscribe(data=>{
        console.log(data)
      this.info = data;
      console.log(this.info);
      this.oil = this.info.quotes.USDARS
      console.log(this.oil)
      this.SaCurrency = this.info.quotes.USDZAR
      this.gas = this.info.quotes.USDGBP
      })
    })
  }
 }

