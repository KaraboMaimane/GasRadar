
import { Injectable } from '@angular/core';
import *as firebase from 'firebase/app';
import { Geolocation } from "@ionic-native/geolocation";
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  data;
  arrInfor = new Array();
  nearByOrg = new Array();
  constructor( public geolocation: Geolocation) {
    console.log('Hello DatabaseProvider Provider');
    // this.checkUserState();
  }

  // login(email: string, password: string){
  //   return firebase.auth().signInWithEmailAndPassword(email, password);
  // }

  // register(name: string, email: string,  password: string){
  //   return firebase.auth().createUserWithEmailAndPassword(email, password);
  // }

  // resetPassword(email:string){
  //   return firebase.auth().sendPasswordResetEmail(email);
  // }

  retrieveData(){
    firebase.database().ref('users/').on('value', (snapshot)=>{
      let dataArray = [];
      let data = snapshot.val();
      let keys = Object.keys(data);
      for(let i = 0; i < keys.length ; i++){
         firebase.database().ref(`users/${keys[i]}`).on('value', (snapshot)=>{
          dataArray.push(snapshot.val());
        })
      } 
      return dataArray;
    })
  }
  createPositionRadius(latitude, longitude){
    var leftposition, rightposition, downposition, uposititon;
    return new Promise ((accpt, rej) =>{
 // down  position
 var downlat = new String(latitude);
 var latIndex = downlat.indexOf( "." );
 var down = parseInt(downlat.substr(latIndex + 1,2)) + 6;
 var down = parseInt(downlat.substr(latIndex + 1,2)) + 12;
 if (down >= 100){
  if (downlat.substr(0,1) == "-"){
    var firstDigits = parseInt(downlat.substr(0,3)) + 1;
  }
  else{
    var firstDigits = parseInt(downlat.substr(0,2)) - 1;
  }
  var remainder = down - 100;
  if (remainder >= 10){
    downposition = firstDigits + "." + remainder;
  }
  else{
    downposition = firstDigits +  ".0" + remainder;
  }
 
 }else{
  if (downlat.substr(0,1) == "-"){
    downposition =  downlat.substr(0,3) + "." + down ;
  }
  else{
    downposition = downlat.substr(0,2) + "." + down;
  }
 
 }
 
 //up  position
 var uplat = new String(latitude);
 var latIndex = uplat .indexOf( "." );
 var up= parseInt(uplat .substr(latIndex + 1,2)) - 6;
 var up= parseInt(uplat .substr(latIndex + 1,2)) - 12;
 if (up <= 0){
  if (uplat.substr(0,1) == "-"){
    var firstDigits = parseInt(uplat.substr(0,3)) + 1;
  }
  else{
    var firstDigits = parseInt(uplat.substr(0,2)) - 1;
  }
  var remainder = down - 100;
  if (remainder >= 10){
    uposititon = firstDigits + "." + remainder;
  }
  else{
    uposititon = firstDigits +  ".0" + remainder;
  }
 }else{
  if (uplat.substr(0,1) == "-"){
    uposititon = uplat.substr(0,3) + "." + up ;
  }
  else{
    uposititon = uplat.substr(0,2) + "." + up ;
  }
 
 }
  //left position
 var leftlat = new String(longitude);
 var longIndex =  leftlat.indexOf(".");
 var left =  parseInt(leftlat.substr(longIndex + 1,2)) - 6;
 var left =  parseInt(leftlat.substr(longIndex + 1,2)) - 12;
 if (left >= 100){
   if (leftlat.substr(0,1) == "-"){
      var firstDigits =  parseInt(leftlat.substr(0,3)) - 1;
   }else{
    var firstDigits =  parseInt(leftlat.substr(0,2)) + 1;
   }
   var remainder = left - 100;
   leftposition= firstDigits +  ".0" + remainder;
 }else{
   if (leftlat.substr(0,1) == "-"){
    var firstDigits= parseInt(leftlat.substr(0,3)) + 1;
   }
   else{
    var firstDigits= parseInt(leftlat.substr(0,2)) - 1;
   }
 
   if (left == 0){
    var remainder = 0;
   }
   else{
    var remainder = left - 12;
   }
 
   leftposition = firstDigits +  ".0" + remainder;
 
 }
    //right position
    var rightlat = new String(longitude);
    var longIndex =  rightlat.indexOf(".");
    var right =  parseInt(rightlat.substr(longIndex + 1,2)) + 6;
    var right =  parseInt(rightlat.substr(longIndex + 1,2)) + 12;
    if (right >= 100){
      if (rightlat.substr(0,1) == "-"){
         var firstDigits =  parseInt(rightlat.substr(0,3)) - 1;
      }else{
       var firstDigits =  parseInt(rightlat.substr(0,2)) + 1;
      }
      var remainder =  right - 100;
      rightposition = firstDigits +  ".0" + remainder;
    }else{
      rightposition = rightlat.substr(0,2) + "." + right;
      if (left == 0){
        var remainder = 0;
       }
       else{
        var remainder = left - 12;
       }
 
       rightposition  = firstDigits +  ".0" + remainder;
    }
 
 
    let radius ={
      left: leftposition,
      right : rightposition,
      up : uposititon,
      down : downposition
    }
    accpt(radius);
    })
  }

  retrieve(){

    return new Promise ((accpt, rej) =>{

      firebase.database().ref("userdb/").on("value", data => {
        let infor = data.val();
        let arry = [];
        let keys = Object.keys(infor);
        console.log(keys);
  
        for (let i = 0; i < keys.length; i++) {
          let k = keys[i];
          let obj = {
            name: infor[k].name,
            lat: infor[k].lat,
            lng: infor[k].lng,
            email: infor[k].email,
            phone: infor[k].phone,
            owner: infor[k].owner,
            tel: infor[k].tel,
            gas: infor[k].gas,
            petrol93: infor[k].petrol93,
            petrol95: infor[k].petrol95
          };
          this.arrInfor.push(obj);
        }

        accpt(this.arrInfor);

       
  })


 
    })
   
  }
  getCurrentLocations(){
    //get current location
     return new Promise ((accpt, rej) =>{
     this.geolocation.getCurrentPosition().then((resp) => {
       console.log(resp);
 
 
         accpt(resp);
 
        }).catch((error) => {
          console.log('Error getting location', error);
        });
      })
   }


   getCurrentLocation(){
    //get current location
     return new Promise ((accpt, rej) =>{
     this.geolocation.getCurrentPosition().then((resp) => {
       this.createPositionRadius(resp.coords.latitude, resp.coords.longitude).then((data:any) =>{
         accpt(data);
       })
        }).catch((error) => {
          console.log('Error getting location', error);
        });
      })
   }
  getNearByOrganizations(radius,org){

    return new Promise((accpt,rej) =>{

      this.getCurrentLocations().then((resp:any) =>{
        console.log(resp);
 
        var lat =  new String(resp.coords.latitude).substr(0,6);
        console.log(lat);
        console.log(resp.coords.latitude)
       var long = new String(resp.coords.longitude).substr(0,5);
        console.log(long);
        console.log(resp.coords.longitude);
        for (var x = 0; x < org.length; x++){
          var orglat = new String(org[x].lat).substr(0,6);
          var orgLong =  new String(org[x].lng).substr(0,5);
          
          // console.log('out');
          // console.log(orglat);
          // console.log(orgLong);
          // console.log( radius.left);
          // console.log(radius.right);
          // console.log(radius.down);
          // console.log(radius.up);
 
 
          if ((orgLong  <= long  && orgLong  >= radius.left || orgLong  >= long  && orgLong  <= radius.right) && (orglat >= lat && orglat <= radius.down || orglat <= lat && orglat >= radius.up)){
 
         this.nearByOrg.push(org[x]);
          console.log(this.nearByOrg);
 
          }
        }
        accpt(this.nearByOrg)
      })
    })
  }

  // checkUserState(){
  //   return firebase.auth().onAuthStateChanged((data)=>{
  //     console.log(data);
  //   })
  // }
}
