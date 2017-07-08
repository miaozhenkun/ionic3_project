import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GoodsService} from "../../../providers/goods-service";
import {GoodDetailPage} from "../good-detail-page/good-detail-page";
import {LookManHuamuluListsPage} from "./LookManHuamulu-lists-page"


@Component({
  selector: 'page-manhuamulu-lists-page',
  templateUrl: 'manhuamulu-lists-page.html',
})
export class ManHuamuluListsPage {
  item;

  obj_goodsListData = [];
  chapter_list=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public goodsService: GoodsService) {
  }

  goods: any;
  errorMessage: string;
  
  ionViewDidLoad() {
    this.item = this.navParams.get('item');
    console.log(this.item);
    this.loadnetData();
  }
  private loadnetData() {
    this.goodsService.getmulu(this.item.comic_id).then(res=>{
      this.chapter_list=res.chapter_list;
    }
    );
  }
  private loadData(refresher) {
    this.goodsService.getmulu(this.item.comic_id).then(res=>{
      this.chapter_list=res.chapter_list;
        refresher.complete();
      console.log(res);
    }
    );
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    setTimeout(() => {
      infiniteScroll.complete();
    }, 500);
  }
  doRefresh(refresher) {
    this.loadData(refresher);
  }

  goBack() {
    this.navCtrl.pop();
  }
  startPage(index: any) {
    this.navCtrl.push(LookManHuamuluListsPage, {
      item: index
    });
  }

}
