import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import firebase from 'firebase';
import { signUp} from '../../app/GeoArray';
import geoArr from '../../app/GlobalGeo';
declare var google;

/**
 * Generated class for the MoreInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more-info',
  templateUrl: 'more-info.html',
})
export class MoreInfoPage implements OnInit{
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  companyInfor;
  businessName;
  businessAddress;
  businessEmail;
  businessTel;
  businessOwner;
  gas;
  p95;
  p93;
  diesel;


  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public navParams: NavParams) {
    
  }

  ionViewDidLoad(){
    this.initMap();
    this.companyInfor =this.navParams.get("obj");
    console.log(this.companyInfor);
    let lat = this.companyInfor.lat;
    let lng = this.companyInfor.lng;
    this.businessName = this.companyInfor.name;
    this.businessEmail= this.companyInfor.email;
    this.businessTel = this.companyInfor.tel;
    this.businessOwner= this.companyInfor.owner;
    this.diesel= this.companyInfor.diesel;
    this.p93= this.companyInfor.petrol93;
    this.p95 = this.companyInfor.petrol95;
  
  }

  ngOnInit(){
   
  }
  initMap() {
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: {lat: 41.85, lng: -87.65}
    });

    this.directionsDisplay.setMap(this.map);

 

  }



  // calculateAndDisplayRoute() {
  //   this.directionsService.route({
  //     origin: this.start,
  //     destination: this.end,
  //     travelMode: 'DRIVING'
  //   }, (response, status) => {
  //     if (status === 'OK') {
  //       this.directionsDisplay.setDirections(response);
  //     } else {
  //       window.alert('Directions request failed due to ' + status);
  //     }
  //   });
  // }

  nextPage(page:string){
    this.navCtrl.push(page);
  }

}