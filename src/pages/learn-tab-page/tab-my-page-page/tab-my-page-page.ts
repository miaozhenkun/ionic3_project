import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import  {Camera,CameraOptions} from '@ionic-native/camera';
/**
 * Generated class for the TabMorePagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-tab-more-page-page',
  templateUrl: 'tab-my-page-page.html',
})
export class TabMorePagePage {
  images: Array<{src:String}>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera:Camera) {
    this.images=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabMorePagePage');
  }
  takePhoto(){
    const  options:CameraOptions={
      quality:100,
      destinationType:this.camera.DestinationType.DATA_URL,
      sourceType:this.camera.PictureSourceType.CAMERA,
      allowEdit:true,
      encodingType:this.camera.EncodingType.JPEG,
      saveToPhotoAlbum:false,
      mediaType:this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData)=>{
      let  base64Image='data:image/jpeg;base64,'+imageData;
      this.images.unshift({src:base64Image})
    },(onerror)=>{

    })
  }

}
