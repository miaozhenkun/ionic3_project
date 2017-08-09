import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabMorePagePage } from './tab-my-page-page';
import {DemoPage} from '../demo/demo';

@NgModule({
  declarations: [
    TabMorePagePage,DemoPage

  ],
  imports: [
    IonicPageModule
  ],
  exports: [
    IonicPageModule
  ],
  entryComponents:[TabMorePagePage,DemoPage]
})
export class TabMorePagePageModule {}
