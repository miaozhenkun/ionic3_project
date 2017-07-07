import {Injectable} from '@angular/core';
import {Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {GOODLIST_URL} from "./Constants";
import {HttpServices} from "./HttpServices"
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';;
@Injectable()
export class GoodsService {
  HttpServices=new HttpServices(this.http);
  constructor(public http: Http) {
    console.log('Hello GoodsService Provider');
  }

  public getGoodLists(){
    return this.HttpServices.get('http://192.168.1.252:9201/boms-manager/api/base/staff/list',null);
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
