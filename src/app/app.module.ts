import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { Open } from '../pages/open/open';
import { HomePage } from '../pages/home/home';
import { Dashboard } from '../pages/dashboard/dashboard';

import { SourcesData } from '../providers/sources-data';
import { Utility } from '../providers/utility';

import { NewsApiService } from '../services/newsapi.service';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Dashboard,
    Open
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Dashboard,
    Open
  ],
  providers: [
    SourcesData,
    Utility,
    NewsApiService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
