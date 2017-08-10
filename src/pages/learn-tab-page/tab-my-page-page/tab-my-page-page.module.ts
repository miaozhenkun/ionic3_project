import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabMorePagePage } from './tab-my-page-page';
import {DemoPage} from '../demo/demo';
import {ChartjsDemoPage} from "../demo/chartjs-demo/chartjs-demo";
import {PaginationDemoPage} from  "../demo/pagination-demo/pagination-demo";
import {WorkMapPage} from  "../demo/work-map/work-map";
@NgModule({
  declarations: [
    TabMorePagePage,DemoPage,ChartjsDemoPage,PaginationDemoPage,WorkMapPage

  ],
  imports: [
    IonicPageModule
  ],
  exports: [
    IonicPageModule
  ],
  entryComponents:[TabMorePagePage,DemoPage,ChartjsDemoPage,PaginationDemoPage,WorkMapPage]
})
export class TabMorePagePageModule {}
