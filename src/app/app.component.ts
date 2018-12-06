import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { DatabaseProvider } from '../providers/database/database';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  activePage: any;

  public rootPage: any = 'TabsPage';

  constructor(private database:DatabaseProvider,public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen) {
    this.initializeApp();
   
    if('Log-Out')
    this.database.getUserState().then(data =>{
      if(data == 1){
        this.rootPage = TabsPage
        console.log('this user is online')
      }
      if(data == 0){
        this.rootPage = LoginPage
        console.log('this user is offline')
      }
    })
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
