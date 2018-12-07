import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { DatabaseProvider } from '../providers/database/database';
import { MediaProvider } from '../providers/media/media';
import {LoginPageModule} from '../pages/login/login.module';
// import {TabsPageModule} from '../pages/tabs/tabs.module';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { DieselViewPage } from '../pages/diesel-view/diesel-view';
import { GasViewPage } from '../pages/gas-view/gas-view';
import { PetrolTipsPage } from '../pages/petrol-tips/petrol-tips';

// import { StatsPage } from '../pages/stats/stats';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,

    DieselViewPage,
    GasViewPage,
    PetrolTipsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
  
    DieselViewPage,
    GasViewPage,
    PetrolTipsPage
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
