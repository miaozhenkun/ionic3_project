import {Component, ViewChild} from '@angular/core';
import { NavController, NavParams, Slides} from 'ionic-angular';
import {LookService} from "../../../providers/look-service";
import {GOODLIST_head_URL} from "../../../providers/Constants";
import {GoodsService} from "../../../providers/goods-service";
import {RankDegtailPageComponent} from '../rank-degtail-page/rank-degtail-page.component';
@Component({
  selector: 'page-tab-broadcast-page',
  templateUrl: 'tab-look-page.html',
})
export class TabBroadcastPage {
  @ViewChild('mySlider') slider: Slides;
  tabToShow: Array<boolean> = [true, true, true, true, true, true, true, true, true];
  scrollableTabsopts: any = {};
  obj_CategorysListData = [];
  obj_GoodsListData = [];
  rankinglist:any=[];
  tabsPlacement: string = "top";
  errorMessage: string;
  Image_head_Url: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lookservice: LookService,public GoodsService:GoodsService) {
    this.Image_head_Url=GOODLIST_head_URL;
  }

  ionViewDidLoad() {
    this.lookservice.getAllcategory().subscribe(
      countries => this.obj_CategorysListData = <any>countries,
      error => this.errorMessage = <any>error,
      function complete() {
      },
    );
    this.lookservice.getGoodsList().subscribe(
      countries => this.obj_GoodsListData = <any>countries,
      error => this.errorMessage = <any>error,
      function complete() {
      },
    );
    this.loadData();
  }
  //data.rankinglist
  loadData(){
    this.GoodsService.getpaihang().then(res=>{
      this.rankinglist=res.rankinglist;
    })
  }

  selectedFriends(index) {
    console.log("Segment changed to", index);
  }
  startPage(index: any) {
    this.navCtrl.push(RankDegtailPageComponent, {
      item: index
    });
  }

}
