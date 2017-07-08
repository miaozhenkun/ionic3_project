import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabHomePage } from './tab-home-page';
import {ManHuamuluListsPage} from '../manhuamulu/ManHuamulu-lists-page';
import {LookManHuamuluListsPage} from '../manhuamulu/LookManHuamulu-lists-page';
// import {HomepageService} from '../../../providers/homepage-service';

@NgModule({
  declarations: [
    TabHomePage,
    ManHuamuluListsPage,
    LookManHuamuluListsPage,
  ],
  imports: [
    IonicPageModule
  ],
  exports: [
    IonicPageModule
    
  ],
  entryComponents:[TabHomePage,ManHuamuluListsPage,LookManHuamuluListsPage]
})
export class TabHomePageModule {}
