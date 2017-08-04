import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabBroadcastPage } from './tab-look-page';
import {RankDegtailPageComponent} from '../rank-degtail-page/rank-degtail-page.component';

@NgModule({
  declarations: [
    TabBroadcastPage,
    RankDegtailPageComponent,
  ],
  imports: [
    IonicPageModule
  ],
  exports: [
    IonicPageModule
  ],
  entryComponents:[TabBroadcastPage,RankDegtailPageComponent]
})
export class TabBroadcastPageModule {}
