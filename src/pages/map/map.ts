import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { NavController, LoadingController } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";
import firebase from "firebase";
import { signUp } from "../../app/GeoArray";
import geoArr from "../../app/GlobalGeo";
import { MoreInfoPage } from "../more-info/more-info";
import { DatabaseProvider } from "../../providers/database/database";
import { MediaProvider } from "../../providers/media/media";
declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild("map") mapElement: ElementRef;
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
  lng2;
  arrayinfor = new Array();
filter;
    searchs:string;
    fuelType;
  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public geolocation: Geolocation,
    public database: DatabaseProvider,
    private media: MediaProvider
  ) {}

  ionViewDidEnter() {
   

    this.database.getCurrentLocation().then((radius)=>{
      this.database.retrieve().then((data)=>{
      this.database.getNearByOrganizations(radius ,data).then((data:any)=>{
      //  console.log(data);

        this.arrayinfor = data ;
      

        
      })
      })
    })

    setTimeout(()=>{

      this.initMap();

    }, 5000)
  }

 
  initMap() {

  
   

  

    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.geolocation.getCurrentPosition().then(resp => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 12,
        center: { lat: this.lat, lng: this.lng },
        disableDefaultUI: true,
        styles: this.media.mapstyle
      });
      let marker = new google.maps.Marker({
        map: this.map,
        position: { lat: this.lat, lng: this.lng },
        icon: {
          url: `${this.media.man}` 
        }
      });
   
      // Add circle overlay and bind to marker
      var circle = new google.maps.Circle({
        map: this.map,
        radius: 10000,    // 10 miles in metres
        fillColor: '#FFC107',
        strokeColor: 'transparent'
      });
      circle.bindTo('center', marker, 'position');

      loader.dismiss();
      firebase
        .database()
        .ref("userdb/")
        .on("value", data => {})
    
console.log("out");
console.log(this.arrayinfor);
for(var x = 0; x < this.arrayinfor.length;x++){

  console.log("in");
  
  console.log( this.arrayinfor);
  console.log(parseFloat(this.arrayinfor[x].lat));
  console.log( parseFloat(this.arrayinfor[x].lng));
  
  
  

  let marker = new google.maps.Marker({
            position: { lat: parseFloat(this.arrayinfor[x].lat), lng: parseFloat(this.arrayinfor[x].lng) },
            map: this.map,
            icon: {
              url: `${this.media.fuelpump}`
            }
          });


          let obj = {
                    name: this.arrayinfor[x].name,
                    lat: this.arrayinfor[x].lat,
                    lng: this.arrayinfor[x].lng,
                    email: this.arrayinfor[x].email,
                    phone: this.arrayinfor[x].phone,
                    owner: this.arrayinfor[x].owner,
                    tel: this.arrayinfor[x].tel,
                    gas: this.arrayinfor[x].gas,
                    petrol93:this.arrayinfor[x].petrol93,
                    petrol95:this.arrayinfor[x].petrol95
                  };

          marker.addListener("click", () => {
              console.log(obj.name);
              return new Promise(()=>{
                geoArr.length = 0
                var geocoder = new google.maps.Geocoder;
                var latLng = new google.maps.LatLng(obj.lat,obj.lng);
             //   infowindow.open(this.map, marker);
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
                  this.navCtrl.push("MoreInfoPage", { obj: obj, lat: this.lat, lng: this.lng });
                },500)
                
              })
          })
        

        }
    
      // }
      // firebase
      //   .database()
      //   .ref("userdb/")
      //   .on("value", data => {
      //     let infor = data.val();
      //     let arry = [];
      //     let keys = Object.keys(infor);
      //     console.log(keys);

          
      //     for (let i = 0; i < keys.length; i++) {
      //       let k = keys[i];
      //       let obj = {
      //         name: infor[k].name,
      //         lat: infor[k].lat,
      //         lng: infor[k].lng,
      //         email: infor[k].email,
      //         phone: infor[k].phone,
      //         owner: infor[k].owner,
      //         tel: infor[k].tel,
      //         gas: infor[k].gas,
      //         petrol93: infor[k].petrol93,
      //         petrol95: infor[k].petrol95
      //       };

      //       this.arry.push(obj);
      //     //  console.log(this.arry);

      //       this.lat2 = this.arry[i].lat;
      //       this.lng2 = this.arry[i].lng;
      //    //   console.log(this.lat + " / " + this.lng);

      //       // let markera: google.maps.Marker = new google.maps.Marker({
      //       //   map: this.map,label:"bararararararar",
      //       //   position: {lat:-26.2651693, lng:27.97542109999995}
      //       // })

            
      //       let marker = new google.maps.Marker({
      //         position: { lat: this.arry[i].lat, lng: this.arry[i].lng },
      //         map: this.map,
      //         icon: {
      //           url: `${this.media.fuelpump}`
      //         }
      //       });

      //       let contentString =  `    
      //       <div class="infowindow">
      //         <div class="imagecontainer">
      //           <img src="${this.media.fuelpump}" alt="">
      //         </div>
      //         <div class="textcontainer">
      //           <p class="headingtext">${this.arry[i].name}</p>
      //           <p class="information">${this.arry[i].lat, this.arry[i].lng}</p>
      //         </div>
      //       </div>
      //       `
      //       let infowindow = new google.maps.InfoWindow({
      //         content: contentString
      //       });


      //       marker.addListener("click", () => {
      //         return new Promise(() => {
      //           geoArr.length = 0;
      //           let geocoder = new google.maps.Geocoder();
      //           let latLng = new google.maps.LatLng(obj.lat, obj.lng);
      //           infowindow.open(this.map, marker);
      //           geocoder.geocode({ latLng: latLng }, function(results, status) {
      //             if (status === google.maps.GeocoderStatus.OK) {
      //               let AreaName = results[0].formatted_address;
      //               let areaAddress = AreaName.split(",");
      //               this.streetName = areaAddress[0];
      //               this.areaName = areaAddress[1];
      //               this.areaLocation = areaAddress[2];
      //               this.postCode = areaAddress[3];

      //               // console.log(AreaName);
      //               // console.log(areaAddress);

      //               let obj = new signUp(
      //                 this.streetName,
      //                 this.areaName,
      //                 this.areaLocation,
      //                 this.postCode
      //               );
      //               geoArr.push(obj);
      //               // console.log(geoArr);
      //             }

      //             // console.log(
      //             //   this.streetName +
      //             //     " " +
      //             //     this.areaName +
      //             //     " " +
      //             //     this.postCode +
      //             //     " " +
      //             //     this.country
      //             // );
      //           });
      //           setTimeout(() => {
      //             const loader = this.loadingCtrl.create({
      //               content: "Please wait...",
      //               duration: 1000
      //             });
      //             loader.present();
      //             this.navCtrl.push("MoreInfoPage", { obj: obj, lat: this.lat, lng: this.lng });
      //           }, 500);
      //         });
      //       });
      //     }
      //   });
    });

    //console.log(this.map + this.lat + this.lng);
    

    // this.directionsDisplay.setMap(this.map);
  }

  marker (){

  }
  input(){
    console.log(this.fuelType);
    if(this.fuelType =="Gas"){
      this.arrayinfor = this.arrayinfor.filter(x => x.gas!== 0);
      console.log(this.arrayinfor);
      this.initMap();
    }else if(this.fuelType =="Petrol"){
      this.arrayinfor = this.arrayinfor.filter(x => x.petrol93 && x.petrol95 !== 0);
      console.log(this.arrayinfor);
      this.initMap();
    }else if(this.fuelType =="Diesel"){
      this.arrayinfor = this.arrayinfor.filter(x => x.diesel !== 0);
      console.log(this.arrayinfor);
      this.initMap();
    }
   
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

  searchinput(address){
    
    let geocoder = new google.maps.Geocoder();
    let resultsMap;
    alert(address);
    geocoder.geocode({'address':address},(results, status)=>{
      alert("year");
      if(status == google.maps.GeocoderStatus.OK){
        this.latii = results[0].geometry.location.lat();
        this.long = results[0].geometry.location.lng();


    
      }
      this.map = new google.maps.Map(document.querySelector('#map'), {
        zoom: 12,
        center: { lat:  this.latii, lng:this.long  },
        disableDefaultUI: true
      });
      let marker = new google.maps.Marker({
        map: this.map,
        position: {lat: this.latii, lng: this.long },
        
      });
      console.log(this.latii, this.long)


      this.database.getSearchbyFarms(this.latii,this.long).then((radius:any)=>{
        console.log(radius);
        this.database.retrieve().then((data:any)=>{
          console.log(data);
          if(data.length==0){
            alert("true");
            this.map = new google.maps.Map(document.querySelector('#map'), {
              zoom: 12,
              center: { lat:  this.latii, lng:this.long  },
              disableDefaultUI: true
            });
            this.arrayinfor.length=0;
          }

          this.database.getSearchedFarm(this.latii,this.long,radius,data).then((data:any)=>{
            console.log(data);


            this.arrayinfor= data;
            if(data.length==0){
              alert("true");
              this.arrayinfor.length=0;
              this.map = new google.maps.Map(document.querySelector('#map'), {
        zoom: 12,
        center: { lat:  this.latii, lng:this.long  },
        disableDefaultUI: true
      });
            }
          })
          for(var x = 0; x < this.arrayinfor.length;x++){

            console.log("in");
            
            console.log( this.arrayinfor);
            console.log(parseFloat(this.arrayinfor[x].lat));
            console.log( parseFloat(this.arrayinfor[x].lng));
            
            
            
          
            let marker = new google.maps.Marker({
                      position: { lat: parseFloat(this.arrayinfor[x].lat), lng: parseFloat(this.arrayinfor[x].lng) },
                      map: this.map,
                      icon: {
                        url: `${this.media.fuelpump}`
                      }
                    });
          
          
                    let obj = {
                              name: this.arrayinfor[x].name,
                              lat: this.arrayinfor[x].lat,
                              lng: this.arrayinfor[x].lng,
                              email: this.arrayinfor[x].email,
                              phone: this.arrayinfor[x].phone,
                              owner: this.arrayinfor[x].owner,
                              tel: this.arrayinfor[x].tel,
                              gas: this.arrayinfor[x].gas,
                              petrol93:this.arrayinfor[x].petrol93,
                              petrol95:this.arrayinfor[x].petrol95
                            };
          
                    marker.addListener("click", () => {
                        console.log(obj.name);
                        return new Promise(()=>{
                          geoArr.length = 0
                          var geocoder = new google.maps.Geocoder;
                          var latLng = new google.maps.LatLng(obj.lat,obj.lng);
                       //   infowindow.open(this.map, marker);
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
                            this.navCtrl.push("MoreInfoPage", { obj: obj, lat: this.lat, lng: this.lng });
                          },500)
                          
                        })
                    })
                  
          
                  }
        })
      })
      
    })
   

 
    // this.database.getSearchbyFarms(this.latii,this.long).then((raduis:any)=>{
    //   console.log(raduis);
    //   this.database
    // })
   
    }


  
  

  nextPage(page: string) {
    this.navCtrl.push(page);
  }
}
