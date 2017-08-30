import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeService: NativeService) {

  }
  ngAfterContentInit() {
    this.lock = document.getElementById("deblocking");
    //this.lockHeight=this.lock.get;
    //
    // console.log(this.lockHeight);
    // console.log(this.lock);

  }
  details(url){
    this.nativeService.openUrlByBrowser(url);
  }
  doSearch(pageNum) {
    console.log(pageNum);
  }
  getResult(List){
    console.log(List);
  }
  getPwdResult(List){
    console.log(List);
  }
}
