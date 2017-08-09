// miao
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GoodsService } from "../../../providers/goods-service";
import {ManHuamuluListsPage} from "../manhuamulu/ManHuamulu-lists-page"
@IonicPage()
@Component({
  selector: 'page-tab-discover-page',
  templateUrl: 'tab-discover-page.html',
})
export class TabDiscoverPage {
  page: number = 1;
  rankinglist:any=[];
  chapter_list:any=[];
  isrun: boolean = false;
  public categoryData = [];
  public categoryDetailData = [];
  public select=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public goodsService: GoodsService) {
  }

  ionViewDidLoad() {
    this.goodsService.getFenLei().then(res => {
      this.rankinglist=res.rankinglist;
      for(var i in this.rankinglist){
        this.rankinglist[i].isSelect=false;
      }
    })
  }
  categoryLeftClick=function(index: number){
    console.log("index"+index);
     this.rankinglist[this.select].isSelect=false;
    let data= this.rankinglist[index];
    data.isSelect=true;

    this.select=index;
  };
  getCategoryDetailData(item){
    this.goodsService.getPaiList(item.argValue, this.page).then(res => {
        this.chapter_list = res;
    })
    console.log(item);
  }
  startPage(index: any) {
    this.navCtrl.push(ManHuamuluListsPage, {
      item: index
    });
  }


}
