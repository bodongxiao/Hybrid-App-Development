import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { MidPage } from '../pages/mid/mid';
import { OptionsPage } from '../pages/options/options';
import { CPage } from '../pages/c/c';
import { IdeasPage } from '../pages/ideas/ideas';
import { ShopPage } from '../pages/shop/shop';
import { LoginPage } from '../pages/login/login';
import { BPage } from '../pages/b/b';
import { SearchPage } from '../pages/search/search';
// import { Camera } from '@ionic-native/camera';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MidPage,
    OptionsPage,
    CPage,
    IdeasPage,
    ShopPage,
    LoginPage,
    BPage,
    SearchPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      tabsHideOnSubPages:true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MidPage,
    OptionsPage,
    CPage,
    IdeasPage,
    ShopPage,
    LoginPage,
    BPage,
    SearchPage,
  ],
  providers: [
    StatusBar,
    // Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
