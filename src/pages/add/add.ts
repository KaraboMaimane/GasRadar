import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';
import { MediaProvider } from '../../providers/media/media';
import { ToastController } from 'ionic-angular';
declare var firebase;
declare var google;
/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  url;
  UserName;
  userProfile = [];
  userImg;
  constructor(private toastCtrl: ToastController,private database: DatabaseProvider, public navCtrl: NavController, public navParams: NavParams, private media: MediaProvider, private loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
    this.database.getProfile().then((data:any)=>{
      this.userProfile = data;
      this.UserName = this.userProfile[0].username;
      this.userImg = this.userProfile[0].img;
      console.log(this.userProfile)
      console.log(this.UserName);
      console.log(this.userImg);
      this.url= this.userImg
    })

    // this.database.getProfiles().then((data:any)=>{
    //   console.log(data)
    // })
  }



  insertImage(event){
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files);
      let selectedfile = event.target.files[0];
      let filename = selectedfile.name;
      const loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 6500
      });
      loader.present();

      let storageRef = firebase.storage().ref(`usersDb/${filename}`);

      let metadata = { contentType: "image/jpeg", size: 0.75 };
      let uploadTask = storageRef.put(selectedfile, metadata);

      uploadTask.on(
        "state_changed",
        function (snapshot) { },
        function (error) {
          // Handle unsuccessful uploads
          alert("error !!1");
        },
        function () {
          // Handle successful uploads on complete

          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log("File available at", downloadURL);
            if(this.url != undefined){
              this.url = downloadURL;
            }
          });
        }
      );

    }
  }
  picInsert(event:any){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();
      reader.onload = (event:any) =>{
        this.url = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
 
  }

  onAddBusiness(form:NgForm){
    this.database.profileUpdate(form.form.value.UserName,this.url).then((data:any)=>{
      console.log(data)
      console.log(form)
      let toast = this.toastCtrl.create({
        message: 'Information Updated Successfully',
        duration: 2000,
        position: 'bottom'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    })
  }

}
