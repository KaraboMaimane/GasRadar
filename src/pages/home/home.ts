import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController,LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import firebase from 'firebase';
import { signUp} from '../../app/GeoArray';
import geoArr from '../../app/GlobalGeo';
import { MoreInfoPage } from '../more-info/more-info';
declare var google;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  lat;
  lng;
  arry=[];
  pos={};
  address;
  lat2;
  lng2;
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public geolocation: Geolocation) {

  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
     this.geolocation.getCurrentPosition().then((resp) => {

      this. lat = resp.coords.latitude;
       this. lng = resp.coords.longitude;
       this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 18,
        center: {lat: this.lat, lng: this.lng},
        disableDefaultUI: true
      });
      let marker = new google.maps.Marker({
        map: this.map,label:"my location",
        position: {lat: this.lat, lng: this.lng},
        animation: google.maps.Animation.BOUNCE,
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
     
      })
     
loader.dismiss();
firebase.database().ref('userdb/').on('value', data=>{
  let infor = data.val();
  let arry=[]
  let keys = Object.keys(infor);
  console.log(keys);

 for (var i = 0; i < keys.length; i++) {
   var k = keys[i];
   let  obj = {
      name: infor[k].name,
      lat: infor[k].lat,
      lng: infor[k].lng,
      email:infor[k].email,
      phone:infor[k].phone,
      owner:infor[k].owner,
      tel:infor[k].tel,
      gas:infor[k].gas,
      petrol93:infor[k].petrol93,
      petrol95:infor[k].petrol95

      }

    this.arry.push(obj);
    console.log(this.arry)

    this.lat2 = this.arry[i].lat;
    this.lng2 = this.arry[i].lng;
    console.log(this.lat + " / " + this.lng)
      
    // let markera: google.maps.Marker = new google.maps.Marker({
    //   map: this.map,label:"bararararararar",
    //   position: {lat:-26.2651693, lng:27.97542109999995}
    // })

   var marker = new google.maps.Marker({position:
    {lat:this.arry[i].lat, lng:this.arry[i].lng}
    ,map:this.map,
    label:this.arry[i].name,},
      );

      var infowindow = new google.maps.InfoWindow({
        content:obj.name
          });


    marker.addListener('click', () =>{
      return new Promise(()=>{
        geoArr.length = 0
        var geocoder = new google.maps.Geocoder;
        var latLng = new google.maps.LatLng(obj.lat,obj.lng);
        infowindow.open(this.map, marker);
        geocoder.geocode({ 'latLng': latLng }, function (results, status) {
    
            if (status === google.maps.GeocoderStatus.OK) {
              var AreaName = results[0].formatted_address;
              let areaAddress = AreaName.split(",");
              this.streetName =areaAddress[0];
              this.areaName = areaAddress[1];
              this.areaLocation = areaAddress[2];
              this.postCode = areaAddress[3];
    
              console.log(AreaName)
              console.log(areaAddress);
    
              let obj = new signUp(this.streetName,this.areaName,this.areaLocation,this.postCode);
              geoArr.push(obj)
              console.log(geoArr)
              
          }
          
            console.log(this.streetName + " " + this.areaName + " " + this.postCode + " " + this.country)
        })
        setTimeout(()=>{
          const loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 1000
          });
          loader.present();
          this.navCtrl.push('MoreInfoPage',{obj:obj})
        },500)
        
      })
    });
  }

})
     })

     

    console.log(this.map +this.lat+this.lng );

   // this.directionsDisplay.setMap(this.map);
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
