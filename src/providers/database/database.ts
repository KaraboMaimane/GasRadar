
import { Injectable } from '@angular/core';
import * as moment from 'moment'
import { Geolocation } from "@ionic-native/geolocation";
// import *as firebase from 'firebase';
import { LoadingController } from 'ionic-angular';

declare var firebase;
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
  newSeachedFarms = new Array();
  database = firebase.database();
  authenticate = firebase.auth();
  dbRef;
  state;
  currentUserName;
  username;
  userKey;
  currentUserImage;
  currentUserID;
  img;
  currentUserPath;
  comments2 = new Array();
  defaultImages = ['../../assets/imgs/pic.jpg', '../../assets/imgs/pic23.jpg', '../../assets/imgs/pic24.jpg', '../../assets/imgs/pic22.jpg', '../../assets/imgs/pic25.jpg']
  user: firebase.User;
  url: string;

  constructor(public geolocation: Geolocation, private loadingCtrl: LoadingController) {
    console.log('Hello DatabaseProvider Provider');
    // this.checkUserState();
  }

  registerUser(Username, email, password) {
    return new Promise((accpt, rej) => {
      this.authenticate.createUserWithEmailAndPassword(email, password).then(() => {
        var user = firebase.auth().currentUser;
        this.dbRef = 'users/' + user.uid;
        this.database.ref(this.dbRef).push({
          Username: Username,
          img: this.defaultImages[Math.floor(Math.random() * 4)],
          userType: "user"
        })
        accpt("user registered")
      }, Error => {
        rej(Error.message)
      })
    })
  }

  insertImage(event: any, url) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files);
      let selectedfile = event.target.files[0];
      let filename = selectedfile.name;
      const loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 6500
      });
      loader.present();

      let storageRef = firebase.storage().ref(filename);

      let metadata = { contentType: "image/jpeg", size: 0.75 };
      let uploadTask = storageRef.put(selectedfile, metadata);

      uploadTask.on(
        "state_changed",
        function (snapshot) { },
        function (error) {
          // Handle unsuccessful uploads
          alert("error !!1");
        },
        function () {
          // Handle successful uploads on complete

          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log("File available at", downloadURL);

          });
        }
      );

    }
  }


  registerBusiness(details) {
    firebase.storage().ref()
    this.user = firebase.auth().currentUser;
    if (this.user != undefined) {
      return firebase.database().ref(`usersdb/${this.user}`).push(details);
    }
  }

  getuser() {
    return new Promise((accpt, rej) => {
      this.username = "";
      this.img = "";
      this.database.ref('users').on('value', (data: any) => {
        var users = data.val();
        var user = firebase.auth().currentUser;
        var userIDs = Object.keys(users);
        for (var x = 0; x < userIDs.length; x++) {
          var str1 = new String(userIDs[x]);
          var index = str1.indexOf(":");
          var currentUserID = userIDs[x].substr(index + 1);
          if (user.uid == currentUserID) {
            this.storeUsername(userIDs[x].substr(0, index));
            this.database.ref('users/' + userIDs[x]).on('value', (data: any) => {
              var Userdetails = data.val();
              this.storeUserID(userIDs[x]);
              var keys2: any = Object.keys(Userdetails);
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
  storeUsername(username) {
    console.log(username)
    this.username = username;
  }

  storeCurrentUserImage(img) {
    this.currentUserImage = img;
  }

  storeCurrentUserPath(path) {
    this.currentUserPath = path;
  }

  storeUserKey(key) {
    this.userKey = key
    console.log(this.userKey);
  }

  storeUserID(uid) {
    this.currentUserID = uid;
  }
  storeCurrentUsername(Username) {
    this.currentUserName = Username;
    console.log(this.currentUserName)
  }

  makeComment(key, comment: any) {
    return new Promise((accpt, rej) => {
      var day = moment().format('MMMM Do YYYY, h:mm:ss a');
      console.log(this.currentUserID)
      this.database.ref('comments/' + this.currentUserID).push({
        comment: comment,
        date: day,
        username: this.currentUserName
      })
      accpt("Comment Added")
    })
  }

  getComments(key) {
    return new Promise((accpt, rej) => {
      this.database.ref('comments/').on('value', (data2: any) => {
        var details = data2.val();
        console.log(details)
        let keys = Object.keys(details)
        console.log(keys)
        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          var l = 'comments/' + k;
          this.database.ref(l).on('value', (data: any) => {
            var UserComments = data.val();
            console.log(UserComments)
            var keys2 = Object.keys(UserComments);
            for (var j = 0; j < keys2.length; j++) {
              var k2 = keys2[j];
              console.log(k2)
              let obj = {
                comment: UserComments[k2].comment,
                date: moment(UserComments[k2].date, 'MMMM Do YYYY, h:mm:ss a').startOf('minutes').fromNow(),
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

  getUserState() {
    return new Promise((accpt, rej) => {
      this.authenticate.onAuthStateChanged(user => {
        if (user != null) {
          this.state = 1;
        }
        else {
          this.state = 0;
        }
        accpt(this.state);
      });
    })
  }

  logout() {
    console.log('exit')
    return new Promise((accpt, rej) => {
      this.authenticate.signOut();
      accpt("log Out Success")
    })
  }

  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  register(name: string, email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  resetPassword(email: string) {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  retrieveData() {
    firebase.database().ref('users/').on('value', (snapshot) => {
      let dataArray = [];
      let data = snapshot.val();
      let keys = Object.keys(data);
      for (let i = 0; i < keys.length; i++) {
        firebase.database().ref(`users/${keys[i]}`).on('value', (snapshot) => {
          dataArray.push(snapshot.val());
        })
      }
      return dataArray;
    })
  }
  createPositionRadius(latitude, longitude) {
    var leftposition, rightposition, downposition, uposititon;
    return new Promise((accpt, rej) => {
      // down  position
      var downlat = new String(latitude);
      var latIndex = downlat.indexOf(".");
      var down = parseInt(downlat.substr(latIndex + 1, 2)) + 6;
      var down = parseInt(downlat.substr(latIndex + 1, 2)) + 12;
      if (down >= 100) {
        if (downlat.substr(0, 1) == "-") {
          var firstDigits = parseInt(downlat.substr(0, 3)) + 1;
        }
        else {
          var firstDigits = parseInt(downlat.substr(0, 2)) - 1;
        }
        var remainder = down - 100;
        if (remainder >= 10) {
          downposition = firstDigits + "." + remainder;
        }
        else {
          downposition = firstDigits + ".0" + remainder;
        }

      } else {
        if (downlat.substr(0, 1) == "-") {
          downposition = downlat.substr(0, 3) + "." + down;
        }
        else {
          downposition = downlat.substr(0, 2) + "." + down;
        }

      }

      //up  position
      var uplat = new String(latitude);
      var latIndex = uplat.indexOf(".");
      var up = parseInt(uplat.substr(latIndex + 1, 2)) - 6;
      var up = parseInt(uplat.substr(latIndex + 1, 2)) - 12;
      if (up <= 0) {
        if (uplat.substr(0, 1) == "-") {
          var firstDigits = parseInt(uplat.substr(0, 3)) + 1;
        }
        else {
          var firstDigits = parseInt(uplat.substr(0, 2)) - 1;
        }
        var remainder = down - 100;
        if (remainder >= 10) {
          uposititon = firstDigits + "." + remainder;
        }
        else {
          uposititon = firstDigits + ".0" + remainder;
        }
      } else {
        if (uplat.substr(0, 1) == "-") {
          uposititon = uplat.substr(0, 3) + "." + up;
        }
        else {
          uposititon = uplat.substr(0, 2) + "." + up;
        }

      }
      //left position
      var leftlat = new String(longitude);
      var longIndex = leftlat.indexOf(".");
      var left = parseInt(leftlat.substr(longIndex + 1, 2)) - 6;
      var left = parseInt(leftlat.substr(longIndex + 1, 2)) - 12;
      if (left >= 100) {
        if (leftlat.substr(0, 1) == "-") {
          var firstDigits = parseInt(leftlat.substr(0, 3)) - 1;
        } else {
          var firstDigits = parseInt(leftlat.substr(0, 2)) + 1;
        }
        var remainder = left - 100;
        leftposition = firstDigits + ".0" + remainder;
      } else {
        if (leftlat.substr(0, 1) == "-") {
          var firstDigits = parseInt(leftlat.substr(0, 3)) + 1;
        }
        else {
          var firstDigits = parseInt(leftlat.substr(0, 2)) - 1;
        }

        if (left == 0) {
          var remainder = 0;
        }
        else {
          var remainder = left - 12;
        }

        leftposition = firstDigits + ".0" + remainder;

      }
      //right position
      var rightlat = new String(longitude);
      var longIndex = rightlat.indexOf(".");
      var right = parseInt(rightlat.substr(longIndex + 1, 2)) + 6;
      var right = parseInt(rightlat.substr(longIndex + 1, 2)) + 12;
      if (right >= 100) {
        if (rightlat.substr(0, 1) == "-") {
          var firstDigits = parseInt(rightlat.substr(0, 3)) - 1;
        } else {
          var firstDigits = parseInt(rightlat.substr(0, 2)) + 1;
        }
        var remainder = right - 100;
        rightposition = firstDigits + ".0" + remainder;
      } else {
        rightposition = rightlat.substr(0, 2) + "." + right;
        if (left == 0) {
          var remainder = 0;
        }
        else {
          var remainder = left - 12;
        }

        rightposition = firstDigits + ".0" + remainder;
      }


      let radius = {
        left: leftposition,
        right: rightposition,
        up: uposititon,
        down: downposition
      }
      accpt(radius);
    })
  }

  retrieve() {

    return new Promise((accpt, rej) => {

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
            petrol95: infor[k].petrol95,
            diesel: infor[k].diesel
          };
          this.arrInfor.push(obj);
        }

        accpt(this.arrInfor);


      })



    })

  }
  getCurrentLocations() {
    //get current location
    return new Promise((accpt, rej) => {
      this.geolocation.getCurrentPosition().then((resp) => {
        //  console.log(resp);


        accpt(resp);

      }).catch((error) => {
        //   console.log('Error getting location', error);
      });
    })
  }


  getCurrentLocation() {
    //get current location
    return new Promise((accpt, rej) => {
      this.geolocation.getCurrentPosition().then((resp) => {
        this.createPositionRadius(resp.coords.latitude, resp.coords.longitude).then((data: any) => {
          accpt(data);
        })
      }).catch((error) => {
        //     console.log('Error getting location', error);
      });
    })
  }
  getNearByOrganizations(radius, org) {

    return new Promise((accpt, rej) => {

      this.getCurrentLocations().then((resp: any) => {
        //  console.log(resp);

        var lat = new String(resp.coords.latitude).substr(0, 6);
        //   console.log(lat);
        //   console.log(resp.coords.latitude)
        var long = new String(resp.coords.longitude).substr(0, 5);
        //   console.log(long);
        //   console.log(resp.coords.longitude);
        for (var x = 0; x < org.length; x++) {
          var orglat = new String(org[x].lat).substr(0, 6);
          var orgLong = new String(org[x].lng).substr(0, 5);

          // console.log('out');
          // console.log(orglat);
          // console.log(orgLong);
          // console.log( radius.left);
          // console.log(radius.right);
          // console.log(radius.down);
          // console.log(radius.up);


          if ((orgLong <= long && orgLong >= radius.left || orgLong >= long && orgLong <= radius.right) && (orglat >= lat && orglat <= radius.down || orglat <= lat && orglat >= radius.up)) {

            this.nearByOrg.push(org[x]);
            //   console.log(this.nearByOrg);

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
  getSearchbyFarms(lat, lng) {
    return new Promise((accpt, rej) => {
      this.createPositionRadius(lat, lng).then((data: any) => {
        accpt(data)
      })
    }).catch((error) => {
      //   console.log('Error getting location', error);

    })
  }



  getSearchedFarm(lat, lng, radius, org) {
    return new Promise((accpt, rej) => {
      this.getSearchbyFarms(lat, lng).then((resp) => {
        var lt = new String(lat).substr(0, 6);
        var long = new String(lng).substr(0, 5);
        //  console.log(lt);

        //    console.log(radius);

        // console.log(lt);
        //   console.log(long);
        for (let x = 0; x < org.length; x++) {
          var orglat = new String(org[x].lat).substr(0, 6);
          var orgLong = new String(org[x].lng).substr(0, 5);

          //   console.log(orgLong);
          //   console.log(orglat );







          //console.log('out');
          if ((orgLong <= long && orgLong >= radius.left || orgLong >= long && orgLong <= radius.right) && (orglat >= lt && orglat <= radius.down || orglat <= lt && orglat >= radius.up)) {
            //console.log('in');
            this.newSeachedFarms.push(org[x]);
            //  console.log(this.nearByOrg);

          }

        }
        accpt(this.newSeachedFarms)
      })
    })
  }
}
