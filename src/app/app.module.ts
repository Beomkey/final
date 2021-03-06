import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HonorCodePage } from '../pages/honor-code/honor-code';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MemberServiceProvider } from '../providers/member-service/member-service';

export const firebaseConfig = {
  apiKey: "AIzaSyCsq7ZJKUu4QvKY9zUTdVI2TK5PXwyxiZs",
  authDomain: "ionic2do-3e5c1.firebaseapp.com",
  databaseURL: "https://ionic2do-3e5c1.firebaseio.com",
  projectId: "ionic2do-3e5c1",
  storageBucket: "ionic2do-3e5c1.appspot.com",
  messagingSenderId: "52330945566"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HonorCodePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HonorCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MemberServiceProvider
  ]
})
export class AppModule {}