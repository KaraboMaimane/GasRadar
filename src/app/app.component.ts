import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import  *as firebase from 'firebase/app';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage: string = 'StatsPage';
=======
  rootPage: string = 'LoginPage';
>>>>>>> 7a0212a70c41f98ee70a1fb4fbe6671b652c3d3b

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    // var config = {
    //   apiKey: "AIzaSyDJdLBi-paptMqqNpIc6c5jHvIM6jOrb6s",
    //   authDomain: "fuelapp-6050c.firebaseapp.com",
    //   databaseURL: "https://fuelapp-6050c.firebaseio.com",
    //   projectId: "fuelapp-6050c",
    //   storageBucket: "",
    //   messagingSenderId: "955542967293"
    // };
    firebase.initializeApp({
      apiKey: "AIzaSyDJdLBi-paptMqqNpIc6c5jHvIM6jOrb6s",
      authDomain: "fuelapp-6050c.firebaseapp.com",
      databaseURL: "https://fuelapp-6050c.firebaseio.com",
      projectId: "fuelapp-6050c",
      storageBucket: "",
      messagingSenderId: "955542967293"
    });
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
