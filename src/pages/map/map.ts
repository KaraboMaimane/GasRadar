import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { NavController, LoadingController } from "ionic-angular";
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

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage{
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
  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public geolocation: Geolocation,
    public database: DatabaseProvider,
    private media: MediaProvider,
    
  ) { 
    this.mapstyle = this.media.mapstyle;
    this.ionViewDidLoad();
   
  }

  initializeItems() {

  
    this.items = [
      'Diepkloof',
      'Pimville',
      'Johannesburg',
      'Dube',
      'Phiri',
      'Eldorado Park',
      'Florida',
      'Protea Glen',
      'Orlando East',
      'Orlando West',
'Pretoria',
'Midrand',
'Southgate ',

    ];
  }

  ionViewDidLoad() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      
      duration: 12600
    });
       
    loader.present();
    
    this.database.getCurrentLocation().then((radius)=>{
      console.log(radius)
      this.geolocation.getCurrentPosition().then((resp)=>{
        this.asiignPostion(resp);
        this.database.getOrganisations().then((data)=>{
      
          this.database.getNearByOrganizations(radius ,data).then((data:any)=>{
            console.log("getNearby data");
            console.log(data);
            this.arrayinfor = data; 
            this.asignLocationState(true); 
          })
          })
      },Error =>{
        this.asignLocationState(false)
      })
    })
    setTimeout(()=>{
      this.initMap();
     
    }, 7000)
    this.initMap();
  
  }
  asignLocationState(value){
    this.locationState =  value;
  }

  asiignPostion(resp){
    this.location =  resp;
  }

  location;
  latt;
  longt;
  locationState = false;

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      console.log(val);
      if(val==""){
        this.searchbar=null;
        console.log("true");
      }
    }
  }


  test(){
    console.log(this.searchbar);
    
    if(this.searchbar==""){
  
 console.log("nothing");
      document.getElementById("hide").style.display="none";
    }else {
      console.log("something");
      document.getElementById("hide").style.display="block";
     console.log(this.searchbar);
    }
    console.log(this.searchbar);
   }
 
  initMap() {
 
    const loader = this.loadingCtrl.create({
      content: "Please wait...2",
      duration: 12600
    });
    // loader.present();
    this.geolocation.getCurrentPosition().then(resp => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 10.9,
        center: { lat: this.lat, lng: this.lng },
        disableDefaultUI: true,
        styles: this.media.mapstyle
      });
      let marker = new google.maps.Marker({
        map: this.map,
        animation:'DROP',
        position: { lat: this.lat, lng: this.lng },
        icon: {
          
          url: `${this.media.man}`
        }
      });
      loader.dismiss();
      // Add circle overlay and bind to marker
      var circle = new google.maps.Circle({
        map: this.map,
        radius: 10000,    // 10 miles in metres
        fillColor: '#FFC107',
        strokeColor: 'transparent'
      });
      circle.bindTo('center', marker, 'position');

     
      firebase
        .database()
        .ref("userdb/")
        .on("value", data => {})
    
console.log("out");
console.log(this.arrayinfor);
for(var x = 0; x < this.arrayinfor.length;x++){



  console.log("in");
  console.log(this.arrayinfor[x].icon);
  console.log( this.arrayinfor);
  console.log(parseFloat(this.arrayinfor[x].lat));
  console.log( parseFloat(this.arrayinfor[x].lng));
  
  if(this.arrayinfor[x].icon == "spaza"){
    this.icon = this.media.shop;
  }else{
    this.icon = this.media.fuelpump;
  }

  let objj = {
   icon:this.icon
  }

  this.arrys.push(objj);
  
  console.log(this.icon);
  

  let marker = new google.maps.Marker({
            position: { lat: parseFloat(this.arrayinfor[x].lat), lng: parseFloat(this.arrayinfor[x].lng) },
            map: this.map,
            animation:'DROP',
            icon: {
              
           url:this.arrys[x].icon,
              //url:this.media.house,
              //  size: {height:200 , width:80}
            }
          });
             
     
          // var infowindow = new google.maps.InfoWindow({
          //   content:"R"+ this.arrayinfor[x].gas,
          // });

          // infowindow.open(this.map, marker);

          let obj = {
                    name: this.arrayinfor[x].name,
                    lat: this.arrayinfor[x].lat,
                    lng: this.arrayinfor[x].lng,
                    email: this.arrayinfor[x].email,
                    phone: this.arrayinfor[x].phone,
                    owner: this.arrayinfor[x].owner,
                    tel: this.arrayinfor[x].tel,
                    diesel:this.arrayinfor[x].diesel,
                    gas: this.arrayinfor[x].gas,
                    petrol93:this.arrayinfor[x].petrol93,
                    petrol95:this.arrayinfor[x].petrol95,
                    newlat :this.latii,
                    newlon:this.long,
                    condition:this.condition
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
                    duration: 500
                  });
                  loader.present();
                  this.navCtrl.push("MoreInfoPage", { obj: obj, lat: this.lat, lng: this.lng });
                },500)


            
                
              })
             
          })
     
        }
    });
  }

  marker (){

  }
  input(){
  
    // if(this.fuelType =="Gas"){

    //   this.arrayinfor = this.arrayinfor.filter(x => x.gas!= 0)
      
    //   console.log(this.arrayinfor);
     
    //   this.initMap();
    // }
    if(this.arrayinfor.length==0){
      this.ionViewDidLoad() 
    }

    if(this.fuelType=="Gas"){
      this.arrayinfor = this.arrayinfor.filter(x => x.gas > 1);
      this.initMap();
      console.log(this.fuelType);
      console.log(this.arrayinfor);
   
    }
      if(this.fuelType=="Petrol"){
        this.arrayinfor = this.arrayinfor.filter(x => x.petrol93 > 1 && x.petrol93 > 1);
        this.initMap();
        console.log(this.fuelType);
        console.log(this.arrayinfor);
     
       
        
      }
      if(this.fuelType=="Diesel"){
        this.arrayinfor = this.arrayinfor.filter(x => x.diesel > 1);
        this.initMap();
        
        console.log(this.fuelType);
        console.log(this.arrayinfor);

       
        
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

  search(address){

   
  
    if(address != undefined)

    {
      this.condition= false;
      let geocoder = new google.maps.Geocoder();
      let resultsMap;
  
      geocoder.geocode({'address':address},(results, status)=>{

        if(status == google.maps.GeocoderStatus.OK){
          this.latii = results[0].geometry.location.lat();
          this.long = results[0].geometry.location.lng();
  
  
      
        }
        this.map = new google.maps.Map(document.querySelector('#map'), {
          zoom: 12,
          center: { lat:  this.latii, lng:this.long  },
          disableDefaultUI: true,
          styles: this.media.mapstyle
        });

        this.arrayinfor.length=0;

        let marker = new google.maps.Marker({
          map: this.map,
          zoom: 12,
          animation:'DROP',
          position: {lat: this.latii, lng: this.long },
          icon: {
           
            url: `${this.media.man}`,
            // size: {height:31, width:31}
          }
        });
        var circle = new google.maps.Circle({
          map: this.map,
          radius: 10000,    // 10 miles in metres
          fillColor: '#FFC107',
          strokeColor: 'transparent'
        });
        circle.bindTo('center', marker, 'position');
        console.log(this.latii, this.long)
  
  
        this.database.getSearchbyFarms(this.latii,this.long).then((radius:any)=>{
      
        console.log("this radius")
          console.log(radius);
  
          this.database.retrieve().then((data:any)=>{
         
        
            console.log("getsearchbyfarms");
           
            console.log(data);
  
            if(data.length==0){
          
           
            
            }
  
            this.database.getSearchedFarm(this.latii,this.long,radius,data).then((data:any)=>{
     
              console.log("")
              console.log(data);
              
              if(data.length==0){
                this.arrayinfor.length=0;
                console.log(this.arrayinfor);
     
              }else{
            
                this.arrayinfor=data;
                console.log(this.arrayinfor);
              }
          
            




              let temp = [];
               temp = data
               console.log(temp);
               
            //  for(let c = 0;c < temp.length/2;c++){
            //   console.log(temp.indexOf(temp[c].lat));
            //   console.log(temp.indexOf(temp[c].lng));
            //    if(temp.indexOf(temp[c].lat) == -1 && temp.indexOf(temp[c].lng)== -1 ){
            //      console.log("no duplication")
                 
            //      this.arrayinfor=data;

            //      console.log(this.arrayinfor);
            //    }else{
            //      console.log("duplication")
            //    }

            //  }



              this.arrayinfor= data;
              if(data.length==0){
             
               this.arrayinfor=[];
               console.log(this.arrayinfor)
             
        //     this.map = new google.maps.Map(document.querySelector('#map'), {
        //     zoom: 12,
        //     center: { lat:  this.latii, lng:this.long  },
        //     disableDefaultUI: true,
        //     icon: {
        //       url: `${this.media.man}`
        //     }
        // });
              }
              for(var x = 0; x < this.arrayinfor.length;x++){
  
                console.log("in");
                
                console.log( this.arrayinfor);
                console.log(parseFloat(this.arrayinfor[x].lat));
                console.log( parseFloat(this.arrayinfor[x].lng));
                
                
  if(this.arrayinfor[x].icon == "spaza"){
    this.icon = this.media.shop;
  }else{
    this.icon = this.media.fuelpump;
  }

  let objj = {
   icon:this.icon
  }



  this.arrys.push(objj);
  
  console.log(this.icon);
                
                
              
                let marker = new google.maps.Marker({
                          position: { lat: parseFloat(this.arrayinfor[x].lat), lng: parseFloat(this.arrayinfor[x].lng) },
                          map: this.map,
                          animation:'DROP',
                          icon: {
                           
                            url: this.arrys[x].icon
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
                          diesel:this.arrayinfor[x].diesel,
                          gas: this.arrayinfor[x].gas,
                          petrol93:this.arrayinfor[x].petrol93,
                          petrol95:this.arrayinfor[x].petrol95,
                          newlat :this.latii,
                          newlon:this.long,
                          condition:this.condition
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
        
      })
     
  
   
      // this.database.getSearchbyFarms(this.latii,this.long).then((raduis:any)=>{
      //   console.log(raduis);
      //   this.database
      // })
     
    }else{
   
    }
    document.getElementById("hide").style.display="none" ;
    this.searchbar = null;
    }

  nextPage(page: string) {
    this.navCtrl.push(page);
  }

  nextPage2(){
    this.database.logout().then(()=>{
      this.navCtrl.setRoot(LoginPage);
    })
  }
}
