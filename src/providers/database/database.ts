
import { Injectable } from '@angular/core';
import *as firebase from 'firebase/app';
import * as moment from 'moment'
import { NavController } from 'ionic-angular';
import { TipsPage } from '../../pages/tips/tips';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  database = firebase.database();
  authenticate = firebase.auth();
  dbRef;
  currentUserName;
  username;
  img;
  currentUserPath;
  currentUserImage;
  userKey;
  data;
  comments;
  comments2 = new Array();
  currentUserID;
  state;
  allComments;
  defaultImages = ['../../assets/imgs/pic.jpg','../../assets/imgs/pic23.jpg','../../assets/imgs/pic24.jpg', '../../assets/imgs/pic22.jpg','../../assets/imgs/pic25.jpg']
  constructor() {
    console.log('Hello DatabaseProvider Provider');
    // this.checkUserState();
  }

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

  registerUser(Username,email,password){
    return new Promise((accpt,rej)=>{
      this.authenticate.createUserWithEmailAndPassword(email,password).then(()=>{
        var user = firebase.auth().currentUser;
        this.dbRef = 'users/' + user.uid;
        this.database.ref(this.dbRef).push({
          Username: Username,
          img : this.defaultImages[Math.floor(Math.random() * 4)],
          userType: "user"
        })
        accpt("user registered")
      },Error=>{
        rej(Error.message)
      })
    })
  }

  login(email,password){
    return new Promise((accpt,rej)=>{
      this.authenticate.signInWithEmailAndPassword(email,password).then(()=>{
        accpt("Success")
      },Error =>{
        rej(Error.message)
      })
    }) 
  }

  getUserSatate(){
    return new Promise ((accpt, rej) =>{ 
      this.authenticate.onAuthStateChanged(user =>{ 
        if (user != null){
          this.state = 1;
        }
        else{
        this.state = 0;
        }
        accpt(this.state);
       });
    })
  }
  storeCurrentUsername(Username){
    this.currentUserName =  Username;
    console.log(this.currentUserName)
    }

    getuser(){
      return new Promise ((accpt,rej)=>{
        this.username = "";
        this.img = "";
        this.database.ref('users').on('value', (data: any) => {
          var users =  data.val();
          var user = firebase.auth().currentUser;
          var  userIDs = Object.keys(users);
          for (var x = 0; x < userIDs.length; x++){
            var str1 = new String( userIDs[x]); 
            var index = str1.indexOf( ":" ); 
            var currentUserID = userIDs[x].substr(index + 1);
            if (user.uid == currentUserID){
              this.storeUsername(userIDs[x].substr(0,index));
              this.database.ref('users/' + userIDs[x]).on('value', (data: any) => {
                var Userdetails = data.val(); 
                this.storeUserID(userIDs[x]);
                var keys2:any = Object.keys(Userdetails);
                var user = firebase.auth().currentUser;
                this.storeCurrentUserImage(Userdetails[keys2[0]].img);
                this.storeCurrentUsername(Userdetails[keys2[0]].Username);
                this.storeUserKey(keys2[0])
                this.storeCurrentUserPath(userIDs[x])
                accpt(Userdetails[keys2])
              })
              break
            }
          }
        })
      })
     }
     storeUsername(username){
      console.log(username)
      this.username = username;
    }

    storeCurrentUserImage(img){
      this.currentUserImage = img;
      }
      
      storeCurrentUserPath(path){
      this.currentUserPath = path;
      }
   
      storeUserKey(key){
       this.userKey = key
       console.log(this.userKey);
      }
   
      storeUserID(uid){
       this.currentUserID = uid;
     }

  makeComment(key,comment:any){
    return new Promise ((accpt,rej)=>{
      var day = moment().format('MMMM Do YYYY, h:mm:ss a');
      console.log(this.currentUserID)
      this.database.ref('comments/' + this.currentUserID).push({
        comment:comment,
        date : day,
        username: this.currentUserName
      })
      accpt("Comment Added")
    })
    
  }

  getComments(key){
    return new Promise((accpt,rej)=>{
      this.database.ref('comments/').on('value',(data2:any)=>{
        var details = data2.val();
        console.log(details)
        let keys = Object.keys(details)
        console.log(keys)
        for(var i = 0; i < keys.length;i++){
          var k = keys[i];
          var l = 'comments/' + k;
          this.database.ref(l).on('value',(data:any)=>{
            var UserComments = data.val();
            console.log(UserComments)
            var keys2 = Object.keys(UserComments);
            for(var j = 0; j < keys2.length;j++){
              var k2 = keys2[j];
              console.log(k2)
              let obj = {
                comment: UserComments[k2].comment,
                date: moment(UserComments[k2].date,'MMMM Do YYYY, h:mm:ss a').startOf('minutes').fromNow(),
                name: UserComments[k2].username
              }
              this.comments2.push(obj);
            }
            accpt(this.comments2)
            console.log(this.comments2)
           
          })
          
        }
      })
    })
  }
  

  // checkUserState(){
  //   return firebase.auth().onAuthStateChanged((data)=>{
  //     console.log(data);
  //   })
  // }

    // login(email: string, password: string){
  //   return firebase.auth().signInWithEmailAndPassword(email, password);
  // }

  // register(name: string, email: string,  password: string){
  //   return firebase.auth().createUserWithEmailAndPassword(email, password);
  // }

  // resetPassword(email:string){
  //   return firebase.auth().sendPasswordResetEmail(email);
  // }
}
