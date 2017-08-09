import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {DemoPage} from "./demo";

@NgModule({
  imports: [IonicModule],
  declarations: [DemoPage],
  entryComponents: [DemoPage],
  providers: [],
  exports: [IonicModule]
})
export class DemoModule {
}
