import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { Data } from '../providers/data';

import {NativeService} from "../providers/NativeService";
import { GoodsService } from "../providers/goods-service";
import { HttpModule } from "@angular/http";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { LookService } from "../providers/look-service";

import { SuperTabsModule } from "ionic2-super-tabs";
import { TabHomePageModule } from "../pages/learn-tab-page/tab-home-page/tab-home-page.module";
import { TabBroadcastPageModule } from "../pages/learn-tab-page/tab-look-page/tab-look-page.module";
import { TabDiscoverPageModule } from "../pages/learn-tab-page/tab-discover-page/tab-discover-page.module";
import { TabMorePagePageModule } from "../pages/learn-tab-page/tab-my-page-page/tab-my-page-page.module";
import { TabMessagesPageModule } from "../pages/learn-tab-page/tab-shopcart-page/tab-shopcart-page.module";
import { LearnTabPageModule } from "../pages/learn-tab-page/learn-tab-page.module";


import{LearnTabPage} from "../pages/learn-tab-page/learn-tab-page"
import {ManHuamuluListsPage} from '../pages/learn-tab-page/manhuamulu/ManHuamulu-lists-page';
import {LookManHuamuluListsPage} from '../pages/learn-tab-page/manhuamulu/LookManHuamulu-lists-page';
import {TabBroadcastPage} from '../pages/learn-tab-page/tab-look-page/tab-look-page';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    LazyLoadImageModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true',       //隐藏全部子页面tabs
      iconMode: 'ios',
      mode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
    }, {
      //设置页面URL 否则页面地址不会改变
        links: [
          { component: LearnTabPage, name: '', segment: 'learn' },
          { component: ManHuamuluListsPage, name: '', segment: 'mulu' },
          { component: LookManHuamuluListsPage, name: '', segment: 'neirong' },
          { component: TabBroadcastPage, name: '', segment: 'paihang' },

        ]
      }
    ),
    SuperTabsModule.forRoot(),
    IonicStorageModule.forRoot(),//就这里
    LearnTabPageModule,
    TabHomePageModule,
    TabBroadcastPageModule,
    TabDiscoverPageModule,
    TabMorePagePageModule,
    TabMessagesPageModule,


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    Data,
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NativeService,
    GoodsService,
    LookService,
  ]
})
export class AppModule {
}
