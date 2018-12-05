import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';
import { MediaProvider } from '../../providers/media/media';
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
  url = `../../assets/imgs/pic24.jpg`;
  constructor(private database: DatabaseProvider, public navCtrl: NavController, public navParams: NavParams, private media: MediaProvider, private loadingCtrl: LoadingController) {

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  onAddBusiness(form: NgForm){
    // this.database.registerBusiness
    this.database.registerBusiness(form.value);
    
     let geocoder = new google.maps.Geocoder();
      let  userid = firebase.auth().currentUser;
   let company = form.value.name;
   let email = form.value.email;
   let owner = form.value.ownerName;
   let tel = form.value.telephone;
   let petrol93 = form.value.p93;
   let petrol95 = form.value.p95;
   let gas = form.value.gas;
   let diesel = form.value.diesel;
   let icon = form.value.business

  console.log(company,email,owner,tel, petrol93,petrol95,gas, diesel,icon);
      geocoder.geocode({'address':form.value.address},function(results, status){
 
  
  
        if(status == google.maps.GeocoderStatus.OK){
      
         alert(userid);
      
          let lati = results[0].geometry.location.lat();
         let longi = results[0].geometry.location.lng();
         console.log(lati +" "+ longi);
      
       
        return firebase.auth().onAuthStateChanged(data=>{
          if(data){
            firebase.database().ref('userdb/'+ userid).update({
              name:company,
              email:email,
              owner:owner,
              tel:tel,
              lat:lati,
              lng:longi,
              petrol93:petrol93,
              petrol95:petrol95,
              diesel:diesel,
              gas:gas,
              uid:userid,
              icon:icon

  
            })
          }else{
      
            alert("login");
          }
      })
        }
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
