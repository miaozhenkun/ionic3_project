import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GOODLIST_URL } from "./Constants";
import { HttpServices } from "./HttpServices"
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class GoodsService {
  HttpServices = new HttpServices(this.http);
  constructor(public http: Http) {
    console.log('Hello GoodsService Provider');
  }

  public getGoodLists() {
    return this.HttpServices.get('http://192.168.1.252:9201/boms-manager/api/base/staff/list', null);
  }
  //获取首页数据
  public getHomeDtaaLists() {
    return this.HttpServices.get('http://app.u17.com/v3/app/android/phone/recommend/itemlist?version=1099&key=null', null);
  }
  //获取漫画目录
  public getmulu(comic_id: number) {
    return this.HttpServices.get('http://app.u17.com/v3/app/android/phone/comic/detail_static?comicid=' + comic_id + '&key=null', null);
  }
  //获取漫画内容
  public getlookmulu(chapter_id: number) {
    return this.HttpServices.get('http://app.u17.com/v3/app/android/phone/comic/chapter?chapter_id=' + chapter_id + '&t=1456319572&v=2280099&android_id=d537c4070191aace&key=null&come_from=PPzhushou&model=m1+note', null);
  }
  //获取漫画排行榜
  public getpaihang() {
    return this.HttpServices.get('http://app.u17.com/v3/app/android/phone/rank/list?sortVersion=2', null);
  }
  //获取漫画排行榜详情
  public getPaiList(argValue, page) {
    return this.HttpServices.get('http://app.u17.com/v3/app/android/phone/list/index?size=40&page=' + page + '&argName=sort&argValue=' + argValue + '&con=1', null);
  }
  //获取漫画分类
  public getFenLei() {
    return this.HttpServices.get('http://app.u17.com/v3/app/android/phone/sort/list?sortVersion=1244', null);
  }

  private extractData(res: Response) {
    let body = res.json().data;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
