import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { MoreInfoPage } from '../more-info/more-info';


@IonicPage()
@Component({
  selector: 'page-tips',
  templateUrl: 'tips.html',
})


export class TipsPage {
  
username = this.navParams.get('key');
comments = [];
comments3 = [];
newmessage;
key;
shownGroup;


  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams,private database: DatabaseProvider) {
    this.database.getuser()
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TipsPage');
    this.comments.length = 0
    this.comments3.length = 0
    this.getComments();

  }
  getComments(){
    this.database.getComments(this.newmessage).then((data:any)=>{
      this.comments = data;
      console.log(this.comments)
      var i = 0;
      for(var x = this.comments.length - 1; x >= 0;x--){
        this.comments3[i] = this.comments[x];
        i++;
      }
    })
  }

  placeComment(newmessage){
    this.database.makeComment(this.username,this.newmessage).then((data)=>{
      const toast = this.toastCtrl.create({
        message: 'Your comment was saved',
        duration: 3000
      });
      toast.present();
    }).catch((error)=>{
      const toast = this.toastCtrl.create({
        message: 'Uh Oh Something Went Wrong!',
        duration: 3000
      });
      toast.present();
    }
  )
  this.comments.length = 0;
  this.newmessage = "";
  this.getComments();
  }
toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};

}


