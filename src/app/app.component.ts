import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { DatabaseProvider } from '../providers/database/database';
import { LoginPage } from '../pages/login/login';
import  *as firebase from 'firebase/app';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage: string = 'TabsPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    // var config = {
=======
  @ViewChild(Nav) nav: Nav;

  activePage: any;

<<<<<<< HEAD
  public rootPage: any = 'TabsPage';
=======
  public rootPage: string = 'LoginPage';
>>>>>>> 6d29239eb125db5061df72f42f139986d951c306

  constructor(private database:DatabaseProvider,public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen) {
    // firebase.initializeApp({
>>>>>>> 89267e46644eff2525a07a46e9ea5b820ab1e7e0
    //   apiKey: "AIzaSyDJdLBi-paptMqqNpIc6c5jHvIM6jOrb6s",
    //   authDomain: "fuelapp-6050c.firebaseapp.com",
    //   databaseURL: "https://fuelapp-6050c.firebaseio.com",
    //   projectId: "fuelapp-6050c",
    //   storageBucket: "fuelapp-6050c.appspot.com",
    //   messagingSenderId: "955542967293"
    // });

    this.initializeApp();
   
    // if('Log-Out')
    // this.database.getUserState().then(data =>{
    //   if(data == 1){
    //     this.rootPage = TabsPage
    //     console.log('this user is online')
    //   }
    //   if(data == 0){
    //     this.rootPage = LoginPage
    //     console.log('this user is offline')
    //   }
    // })


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
