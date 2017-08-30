import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {LearnTabPage} from "./learn-tab-page";

@NgModule({
  declarations: [
    LearnTabPage,
  ],
  entryComponents: [
    LearnTabPage,
  ],
  imports: [
    IonicPageModule.forChild(LearnTabPage)
  ],
  exports: [
    IonicPageModule
  ]
})
export class LearnTabPageModule {}
