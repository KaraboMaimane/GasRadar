import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';
import { MediaProvider } from '../../providers/media/media';
declare var firebase;
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
  url = `../../assets/imgs/pic24.jpg`;
  constructor(private database: DatabaseProvider, public navCtrl: NavController, public navParams: NavParams, private media: MediaProvider, private loadingCtrl: LoadingController) {

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  onAddBusiness(form: NgForm){
    // this.database.registerBusiness
    this.database.registerBusiness(form.value).then(data=>{
      console.log(data);
    })
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

      let storageRef = firebase.storage().ref(`businesses/${filename}`);

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

}
