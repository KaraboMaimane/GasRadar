import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { DatabaseProvider } from '../providers/database/database';
import { MediaProvider } from '../providers/media/media';
// import { StatsPage } from '../pages/stats/stats';


@NgModule({
  declarations: [
    MyApp,LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    MediaProvider
  ]
})
export class AppModule {}
