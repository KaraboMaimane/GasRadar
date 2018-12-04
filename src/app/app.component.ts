import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import  *as firebase from 'firebase/app';
import { TabsPage } from '../pages/tabs/tabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD

=======
<<<<<<< HEAD
  rootPage: string = 'TabsPage';
=======
>>>>>>> 852455cce61456c5371ea069b44d08aa217822d9
  rootPage: string = "TabsPage";
>>>>>>> 196182762aa90c7dc6a773d106dae89a7e2e6f8a


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
