import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoodsService } from "../../../providers/goods-service";
@Component({
    selector: 'rank-degtail-page',
    templateUrl: 'rank-degtail-page.component.html',
})
export class RankDegtailPageComponent {
    item;
    page: any = 1;
    isrun: boolean = false;
    chapter_list: any = [];
    constructor(public navCtrl: NavController, public navParams: NavParams, public goodsService: GoodsService) {

    }
    ionViewDidLoad() {
        this.item = this.navParams.get('item');
        //console.log(this.item);
        this.loadnetData();
    }
    loadnetData() {
        this.goodsService.getPaiList(this.item.argValue, this.page).then(res => {
            console.log(res);
            if (this.isrun) {
                this.chapter_list = this.chapter_list.concat(res);
            } else {
                this.chapter_list = res;
            }

        })
    }
    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        this.page++;
        this.loadnetData();
        this.isrun = true;
        infiniteScroll.complete();
        // setTimeout(() => {
        //     infiniteScroll.complete();
        // }, 500);
    }
    doRefresh(refresher) {
        this.page = 1;
        this.isrun = false;
        this.loadnetData();
        // thi
        refresher.complete();
    }

    goBack() {
        this.navCtrl.pop();
    }

}
