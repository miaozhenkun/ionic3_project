import {Component} from '@angular/core';
import {NavController, NavParams,ToastController} from 'ionic-angular';
import {NativeService} from "../../../../providers/NativeService";

/*
 Generated class for the PaginationDemo page.
 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-pagination-demo',
  templateUrl: 'pagination-demo.html',
})
export class PaginationDemoPage {
  lock:any;
  lockHeight:number;
  toast: any = ToastController;
  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeService: NativeService,toast: ToastController) {
    this.toast=toast;
  }
  ngAfterContentInit() {

  }
  details(url){
    this.nativeService.openUrlByBrowser(url);
  }
  doSearch(pageNum) {
    console.log(pageNum);
  }

  getPwdResult(List){
    let toast = this.toast.create({
      message: List.toString(),
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
