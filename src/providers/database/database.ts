
import { Injectable } from '@angular/core';
import *as firebase from 'firebase/app';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  data;
  constructor() {
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

  // checkUserState(){
  //   return firebase.auth().onAuthStateChanged((data)=>{
  //     console.log(data);
  //   })
  // }
}
