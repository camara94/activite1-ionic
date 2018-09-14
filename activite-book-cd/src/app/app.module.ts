import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BookListPage} from "../pages/lists/book-list/book-list";
import {CdListPage} from "../pages/lists/cd-list/cd-list";
import {TabsPage} from "../pages/tabs/tabs";
import {LendBookPage} from "../pages/lends/lend-book/lend-book";
import {LendCdPage} from "../pages/lends/lend-cd/lend-cd";
import {LivresCDServices} from "../services/livresCD.services";
import {SittingsPage} from "../pages/sittings/sittings";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookListPage,
    CdListPage,
    TabsPage,
    LendBookPage,
    LendCdPage,
    SittingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookListPage,
    CdListPage,
    TabsPage,
    LendBookPage,
    LendCdPage,
    SittingsPage
  ],
  providers: [
    LivresCDServices,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
