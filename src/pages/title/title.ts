import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";
import { signUp } from "../../app/GeoArray";
import geoArr from "../../app/GlobalGeo";
import { MoreInfoPage } from "../more-info/more-info";
import { DatabaseProvider } from "../../providers/database/database";
import { MediaProvider } from "../../providers/media/media";
import { LoginPage } from "../login/login";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { CachedResourceLoader } from "@angular/platform-browser-dynamic/src/resource_loader/resource_loader_cache";
declare var google;
declare var firebase;
/**
 * Generated class for the TitlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-title',
  templateUrl: 'title.html',
})
export class TitlePage {
  map: any;
  start = "chicago, il";
  end = "chicago, il";
  latii;
  long;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  lat;
  lng;
  arry = [];
  pos = {};
  address;
  lat2;
  icon;
  lng2;
 arrys =[]
  arrayinfor = new Array();
filter;
    searchs:string;
    fuelType;
    condition;
    inputs;
    tags=[
      "Soweto",
      "Johannesburg"
    ]
    mapstyle:any;
    items: string[];
    searchbar :string ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,public geolocation: Geolocation,public database: DatabaseProvider,private media: MediaProvider,) {
    this.mapstyle = this.media.mapstyle;
    this.ionViewDidLoad()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TitlePage');
    this.initMap()
  }

  initMap(){
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000
    });  
    loader.present();

    this.database.getCurrentLocation().then((radius:any)=>{
      console.log(radius);
      this.database.getOrganisations().then((orgs:any)=>{

        this.database.getNearByOrganizations(radius,orgs).then((data:any)=>{
          console.log(data)
        })
      })
    })
  }
}
