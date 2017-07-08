import {Injectable} from '@angular/core';
 import {Http, Response, Headers, RequestOptions} from '@angular/http';
 import 'rxjs/add/operator/toPromise';

 @Injectable()
 export class HttpServices {

   constructor(private http: Http) {
   }

   public get(url: string, paramObj: any) {
       let headers = new Headers({'access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTk0OTczNTQsImxvZ2luVXNlckluZm8iOnsiaWQiOiIxIiwidXNlck5hbWUiOiJhZG1pbiIsInBhc3NXb3JkIjpudWxsLCJ0b2tlbiI6bnVsbCwidXNlciI6eyJpZCI6MSwiY3JlYXRlVGltZSI6MTQ5ODEyMTg1OTAwMCwiY3JlYXRlVXNlciI6bnVsbCwidXBkYXRlVXNlciI6bnVsbCwidXNlck5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjpudWxsLCJzdGF0ZSI6IjAxIiwibmlja25hbWUiOiLmtYvor5XnlKjmiLciLCJidXNpbmVzc0lkIjpudWxsLCJ1cGRhdGVUaW1lIjpudWxsLCJjb21tZW50IjpudWxsLCJlbmR0aW1lIjpudWxsLCJyZXNvdXJjZXMiOm51bGwsImlzcGF5IjpudWxsfSwibWZUcmVlVm8iOm51bGwsImJ1c2luZXNzSWQiOm51bGx9fQ.qI6Ku9C684WIVnvB9tcZnSlhSEJdO7Ox9L5nHBMOSAM'});
     return this.http.get(url + this.toQueryString(paramObj),new RequestOptions({headers:headers}))
       .toPromise()
       .then(res => this.handleSuccess(res.json()))
       .catch(error => this.handleError(error));
   }

   public post(url: string, paramObj: any) {
     let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
     return this.http.post(url, this.toBodyString(paramObj), new RequestOptions({headers: headers}))
       .toPromise()
       .then(res => this.handleSuccess(res.json()))
       .catch(error => this.handleError(error));
   }

   public postBody(url: string, paramObj: any) {
     let headers = new Headers({'Content-Type': 'application/json'});
     return this.http.post(url, paramObj, new RequestOptions({headers: headers}))
       .toPromise()
       .then(res => this.handleSuccess(res.json()))
       .catch(error => this.handleError(error));
   }

   private handleSuccess(result) {
     if (result &&result.code==1&&result.data.returnData) {//由于和后台约定好,所有请求均返回一个包含success,msg,data三个属性的对象,所以这里可以这样处理
       //alert(result.code);//这里使用ToastController
       return result.data.returnData ;
     }
     return result.data;
   }

 private handleError(error: Response | any) {
     let msg = '请求失败';
     if (error.status == 0) {
       msg = '请求地址错误';
     }
     if (error.status == 400) {
       msg = '请求无效';
       console.log('请检查参数类型是否匹配');
     }
     if (error.status == 404) {
       msg = '请求资源不存在';
       console.error(msg+'，请检查路径是否正确');
     }
     console.log(error);
     alert(msg);//这里使用ToastController
     return {success: false, msg: msg};
   }

   /**
    * @param obj　参数对象
    * @return {string}　参数字符串
    * @example
    *  声明: var obj= {'name':'小军',age:23};
    *  调用: toQueryString(obj);
    *  返回: "?name=%E5%B0%8F%E5%86%9B&age=23"
    */
   private toQueryString(obj) {
     let ret = [];
     for (let key in obj) {
       key = encodeURIComponent(key);
       let values = obj[key];
       if (values && values.constructor == Array) {//数组
         let queryValues = [];
         for (let i = 0, len = values.length, value; i < len; i++) {
           value = values[i];
           queryValues.push(this.toQueryPair(key, value));
         }
         ret = ret.concat(queryValues);
       } else { //字符串
         ret.push(this.toQueryPair(key, values));
       }
    }
     return '?' + ret.join('&');
   }

   /**
    *
    * @param obj
    * @return {string}
    *  声明: var obj= {'name':'小军',age:23};
    *  调用: toQueryString(obj);
    *  返回: "name=%E5%B0%8F%E5%86%9B&age=23"
    */
   private toBodyString(obj) {
     let ret = [];
     for (let key in obj) {
       key = encodeURIComponent(key);
       let values = obj[key];
       if (values && values.constructor == Array) {//数组
         let queryValues = [];
         for (let i = 0, len = values.length, value; i < len; i++) {
           value = values[i];
           queryValues.push(this.toQueryPair(key, value));
         }
         ret = ret.concat(queryValues);
       } else { //字符串
         ret.push(this.toQueryPair(key, values));
       }
     }
     return ret.join('&');
   }

   private toQueryPair(key, value) {
     if (typeof value == 'undefined') {
       return key;
     }
     return key + '=' + encodeURIComponent(value === null ? '' : String(value));
   }    
 }