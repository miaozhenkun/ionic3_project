import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {DemoPage} from "./demo";
import {ChartjsDemoPage} from "./chartjs-demo/chartjs-demo";
@NgModule({
  imports: [IonicModule],
  declarations: [DemoPage,ChartjsDemoPage],
  entryComponents: [DemoPage,ChartjsDemoPage],
  providers: [],
  exports: [IonicModule]
})
export class DemoModule {
}
