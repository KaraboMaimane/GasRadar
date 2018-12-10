import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { DatabaseProvider } from '../providers/database/database';
import { MediaProvider } from '../providers/media/media';
import {LoginPageModule} from '../pages/login/login.module';
import {TabsPageModule} from '../pages/tabs/tabs.module';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
// import { StatsPage } from '../pages/stats/stats';


@NgModule({
  declarations: [
    MyApp,LoginPage
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,LoginPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,LaunchNavigator,
    MediaProvider
  ]
})
export class AppModule {}
