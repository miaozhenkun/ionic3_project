import {Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {GOODLIST_head_URL} from "../../../providers/Constants";
import {GoodsService } from "../../../providers/goods-service";
import {RankDegtailPageComponent} from '../rank-degtail-page/rank-degtail-page.component';
@Component({
  selector: 'page-tab-messages-page',
  templateUrl: 'tab-shopcart-page.html',
})
export class TabMessagesPage {
  rankinglist:any=[]
  obj_ShopCartRecommendData = [];
  private errorMessage: String;
  Image_head_Url: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public goodsService: GoodsService) {
    this.Image_head_Url=GOODLIST_head_URL;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabMessagesPage');
    this.goodsService.getFenLei().then(res => {
            this.rankinglist=res.rankinglist;
        })
  }
  startPage(index: any) {
    this.navCtrl.push(RankDegtailPageComponent, {
      item: index
    });
  }

}
