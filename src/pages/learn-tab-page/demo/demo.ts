import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ChartjsDemoPage} from "./chartjs-demo/chartjs-demo";
import {LookService} from "../../../providers/look-service";

@Component({
  selector: 'page-contact',
  templateUrl: 'demo.html'
})
export class DemoPage {
  obj_CategorysListData=[];
  errorMessage: string;
  constructor(private navCtrl: NavController,private LookService:LookService) {

  }
  chartjs() {
    this.navCtrl.push(ChartjsDemoPage);
  }
  ionViewDidLoad() {
    this.LookService.getData().subscribe(
      countries => this.obj_CategorysListData = <any>countries,
      error => this.errorMessage = <any>error,
      function complete() {
        console.log(123);
        console.log(this.obj_CategorysListData);
      },
    );


  }


}
