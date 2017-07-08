import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {GOODLIST_URL} from "./Constants";
import {HttpService} from "./HttpService"
import {GlobalData} from "./GlobalData";
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';;
@Injectable()
export class HomepageService {
  
  constructor(public http: Http) {
    console.log('Hello HomepageService Provider');
  }
   httpService=new HttpService(this.http,null);
  public getHomeDtaaLists(){
    return this.httpService.get('http://app.u17.com/v3/app/android/phone/recommend/itemlist?version=1099&key=null').map(res => res.json().content);
  }
  private  extractData(res: Response) {
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
