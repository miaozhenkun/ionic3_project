import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ChartjsDemoPage} from "./chartjs-demo/chartjs-demo";
@Component({
  selector: 'page-contact',
  templateUrl: 'demo.html'
})
export class DemoPage {

  constructor(private navCtrl: NavController) {

  }
  chartjs() {
    this.navCtrl.push(ChartjsDemoPage);
  }
}
