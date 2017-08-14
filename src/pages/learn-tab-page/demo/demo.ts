import {Component, ElementRef, Injector, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ChartjsDemoPage} from "./chartjs-demo/chartjs-demo";
import {LookService} from "../../../providers/look-service";
import {PaginationDemoPage} from  "./pagination-demo/pagination-demo";
import {WorkMapPage} from  "./work-map/work-map";
 // import {AreasSelect} from "../../../components/area-select/AreasSelect";

@Component({
  selector: 'page-contact',
  templateUrl: 'demo.html',
})

export class DemoPage {
  obj_CategorysListData;
  errorMessage: string;
  constructor(private navCtrl: NavController,private LookService:LookService,protected rt: ElementRef, protected ij: Injector) {
    //super(rt, ij);
  }
  chartjs() {
    this.navCtrl.push(ChartjsDemoPage);
  }
  page(){
    this.navCtrl.push(PaginationDemoPage);
  }
  gomap(){
    this.navCtrl.push(WorkMapPage);
  }
  ionViewDidLoad() {
    this.LookService.getData().subscribe(
      data=>{
          console.log(data.data);
          console.log(data.data.message);
          this.obj_CategorysListData=data.data.message;
      }
    )
  }
  @ViewChild('areasSelect') areasSelect;
  showAreasSelect() {
    this.areasSelect.open();
  }
  done(data) {
    console.log(data);
  }
  closeSelect() {
    //this.showAlert('you click close');
  }



}
