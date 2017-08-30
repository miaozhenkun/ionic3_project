import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import {AppVersion} from '@ionic-native/app-version';
import {Toast} from '@ionic-native/toast';
import {File} from '@ionic-native/file';
import {Transfer} from '@ionic-native/transfer';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {ImagePicker} from '@ionic-native/image-picker';
import {Network} from '@ionic-native/network';
import {AppMinimize} from '@ionic-native/app-minimize';

import {GlobalData} from '../providers/GlobalData';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { Data } from '../providers/data';

import {NativeService} from "../providers/NativeService";
import { GoodsService } from "../providers/goods-service";
import { HttpModule } from "@angular/http";
import { LazyLoadImageModule } from "ng-lazyload-image";
import {Logger} from "../providers/Logger";
import {HttpMyNetService} from '../providers/HttpMyNetService';
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
    MyApp
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
    Toast,
    File,
    Transfer,
    InAppBrowser,
    ImagePicker,
    Network,
    AppVersion,
    AppMinimize,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Logger,
    GlobalData,
    NativeService,
    GoodsService,
    HttpMyNetService,
    LookService,
  ]

})
export class AppModule {

}
