import {NgModule} from '@angular/core';
import {DemoPage} from "./demo";
import { IonicPageModule } from 'ionic-angular';
import {AreasSelect} from '../../../components/area-select/AreasSelect';

@NgModule({
  declarations: [DemoPage],
  imports: [IonicPageModule],
  entryComponents: [DemoPage],
  providers: [],
  exports: [IonicPageModule]
})
export class DemoModule {
}
