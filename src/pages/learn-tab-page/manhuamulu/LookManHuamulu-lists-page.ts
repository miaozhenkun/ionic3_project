import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GoodsService} from "../../../providers/goods-service";
import {GoodDetailPage} from "../good-detail-page/good-detail-page";


@Component({
  selector: 'page-lookmanhuamulu-lists-page',
  templateUrl: 'lookmanhuamulu-lists-page.html',
})
export class LookManHuamuluListsPage {
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
    this.loadData();
  }
  
  private loadNetData(refresher: any) {

  }
  private loadData() {
    this.goodsService.getlookmulu(this.item.chapter_id).then(res=>{
      this.chapter_list=res;
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
    // thi
    refresher.complete();
  }

  goBack() {
    this.navCtrl.pop();
  }
  startPage(index: number) {
    this.navCtrl.push(GoodDetailPage, {
      item: index
    });
  }

}
