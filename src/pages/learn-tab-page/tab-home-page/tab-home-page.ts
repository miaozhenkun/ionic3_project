import {Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import * as Swiper from 'swiper';
import {GoodsService} from "../../../providers/goods-service";
import {ManHuamuluListsPage} from "../manhuamulu/ManHuamulu-lists-page"
import * as $ from 'jquery';
// import {HomepageService} from '../../../providers/homepage-service';
@Component({
  selector: 'page-tab-home-page',
  templateUrl: 'tab-home-page.html',
})
export class TabHomePage {
  @ViewChild('lyScroll')
  lyScrollDiv: ElementRef;
  @ViewChild('headBgColor')
   greetBgDiv: ElementRef;
  // @ViewChild('btnBackTop')
  //  bBackTop: ElementRef;

  oSwiper1: any = null;
  public headerSlideData = [];
  public manhualist=[];
  constructor( public GoodsService:GoodsService, public navCtrl: NavController, public navParams: NavParams, public el: ElementRef) {
  }

  ionViewDidLoad() {
    this.initHeaderSlide();
    this.headerChangeColor();
    // this.goTop();
    this.initToutiaoSlide();
    this.countdown();
    this.getData();
  }
  private getData(){
    this.GoodsService.getHomeDtaaLists().then(res=>{
      console.log(res.dataList);
      this.headerSlideData=res.dataList[0].galleryItems;
      for(var i=0; i<res.dataList.length;i++){
        if(i>0){
          this.manhualist.push(res.dataList[i]);
        }
      }

    }).catch(error => console.log(error));
  }

  private countdown() {
   let timer;
   if(timer)
     clearInterval(timer);
    // 倒计时
    var timeObj={
      h:1,
      m:37,
      s:13
    };
    var timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
    var timeList=document.getElementsByClassName('time-text');
    for(var i=0;i<timeList.length;i++){
      timeList[i].innerHTML=timeStr[i];
    }
    function toDouble(num){
      if(num<10){
        return '0'+num;
      }else{
        return ''+num;
      }
    }
    timer=setInterval(function(){
      timeObj.s--;
      if(timeObj.s==-1){
        timeObj.m--;
        timeObj.s=59;
      }
      if(timeObj.m==-1){
        timeObj.h--;
        timeObj.m=59;
      }
      if(timeObj.h==-1){
        timeObj.h=0;
        timeObj.m=0;
        timeObj.s=0;
        clearInterval(timer);
      }
      timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
      for(var i=0;i<timeList.length;i++){
        timeList[i].innerHTML=timeStr[i];
      }
    },1000)

  }


  // private goTop() {
  //   let lyBg=this.lyScrollDiv.nativeElement;
  //   //let btTop=this.bBackTop.nativeElement;

  //   lyBg.addEventListener('scroll',function(){
  //     var top = btTop.scrollTop;
  //
  //   btTop.onclick = function(){
  //     lyBg.scrollTop = 0;
  //   }
  // }

  private headerChangeColor() {
    //https://segmentfault.com/a/1190000008653690
    let headdiv = this.lyScrollDiv.nativeElement;
    var nowOpacity = 0;
    let lHeadBgdiv= this.greetBgDiv.nativeElement;
    headdiv.onscroll = function (event) {
      if (this.scrollTop / 250 < .85) {
        nowOpacity = this.scrollTop / 250;
      }
      lHeadBgdiv.style.opacity = nowOpacity;

    }
  }

  // 初始化滚动条
  private initToutiaoSlide() {
    new Swiper('#toutiaoSlider', {
      direction:'vertical',
      autoplay: 2000,
      loop: true
    });
  }
  // 初始化头部滚动条
  private initHeaderSlide() {
    this.oSwiper1 = new Swiper('.swiper-container', {
      slidesPerView: 1,
      paginationClickable: true,
      centeredSlides: true,
      autoplay: 2000,
      autoplayDisableOnInteraction: false,
      loop: true,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 改变自动更新
       observer:true,
      // observeParents:true
    });

  }
  startPage(index: any) {
    this.navCtrl.push(ManHuamuluListsPage, {
      item: index
    });
  }


}
