import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabMorePagePage } from './tab-my-page-page';
import {DemoPage} from '../demo/demo';
import {ChartjsDemoPage} from "../demo/chartjs-demo/chartjs-demo";
import {PaginationDemoPage} from  "../demo/pagination-demo/pagination-demo";
import {WorkMapPage} from  "../demo/work-map/work-map";
import {WorkPage} from  "../demo/work/work-map";
//导入组件
import {AreasSelect} from '../../../components/area-select/AreasSelect';
import {PagingPage} from '../../../shared/paging/paging';
import {Deblocking} from '../../../shared/deblocking/deblocking';

// import {MapLocation} from '../../../shared/map-component/map-location/map-location'
import {MapLocationModule} from "../../../shared/map-component/map-location/map-location.module";
import {PreviewPicturePageModule} from '../../../components/preview-picture/preview-picture.module'

@NgModule({
  declarations: [
    TabMorePagePage,DemoPage,ChartjsDemoPage,PaginationDemoPage,WorkMapPage,WorkPage,AreasSelect,PagingPage,Deblocking
  ],
  imports: [
    IonicPageModule,MapLocationModule,PreviewPicturePageModule
  ],
  exports: [
    IonicPageModule,AreasSelect,PagingPage,Deblocking
  ],
  entryComponents:[TabMorePagePage,DemoPage,ChartjsDemoPage,PaginationDemoPage,WorkMapPage,WorkPage]
})
export class TabMorePagePageModule {}
