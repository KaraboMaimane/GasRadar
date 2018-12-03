import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import firebase from 'firebase';
import { signUp} from '../../app/GeoArray';
import geoArr from '../../app/GlobalGeo';
import { MediaProvider } from '../../providers/media/media';
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
  lng1: any;
  lat1: any;
  object: any;
  lng: any;
  lat: any;
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
  action: string = 'info';
  addressArr = [];
  streetName2;
  areaLocation2;
  areaName2;
  postCode2;
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public navParams: NavParams, private media: MediaProvider) {
    
  }

  ionViewDidLoad(){
    this.initMap();

    this.addressArr = geoArr;

    this.streetName2 = this.addressArr[0].streetname;
    this.areaLocation2 = this.addressArr[0].areaLocation;
    this.areaName2 = this.addressArr[0].areaName;
    this.postCode2 = this.addressArr[0].postCode;
    console.log(this.areaName2)
    
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
    this.object = this.navParams.get('obj');
    this.lat = this.object.lat;
    this.lng = this.object.lng;
    this.lat1 = this.navParams.get('lat');
    this.lng1 = this.navParams.get('lng');
    this.calculateAndDisplayRoute(this.lat, this.lng, this.lat1, this.lng1);
    // this.calculateAndDisplayRoute(this.navParams.get(''))
  }
  initMap() {
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 8,
      center: {lat: this.lat, lng: this.lng},
      disableDefaultUI: true,
      styles: this.media.mapstyle
    });


    this.directionsDisplay.setMap(this.map);

    
  }



  calculateAndDisplayRoute(lat, lng, lat1, lng1) {

    this.directionsService.route({
      origin: `${lat},${lng}`,
      destination: `${lat1},${lng1}`,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        let location = response.routes[0].legs[0];
        // makeMarker(location)
        console.log(location);
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });

    // function makeMarker(position){
    //   new google.maps.Marker({
    //     position: position,
    //     map: this.map,
    //     icon: {
    //       url: `${this.media.man}`
    //     },
    //     title: `You`
    //    });
    // }
  }

  nextPage(page:string){
    this.navCtrl.push(page);
  }

}
