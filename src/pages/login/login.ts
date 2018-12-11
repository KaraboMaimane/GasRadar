import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';
import { TabsPage } from '../tabs/tabs';

/**
* Generated class for the LoginPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
 selector: 'page-login',
 templateUrl: 'login.html',
})
export class LoginPage {

 action: string;

 constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, private database: DatabaseProvider, private toastCtrl: ToastController) {
   this.action = 'login';
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad LoginPage');
 }

  register(form: NgForm){
    this.database.registerUser(form.form.value.name, form.form.value.email, form.form.value.password).then(
      (data)=>{
        const toast = this.toastCtrl.create({
          message: 'You Have Successfully Been Registered, Please Log In',
          duration: 3000
        });
        toast.present();
        this.action = 'login'
      }
    ).catch(
      (error)=>{
        const toast = this.toastCtrl.create({
          message: 'Uh Oh Something Went Wrong!',
          duration: 3000
        });
        toast.present();
        console.log(error);
      }
    )
  }

 login(form: NgForm){
   console.log(form)
   this.database.login(form.form.value.email,form.form.value.password).then(
     (data)=>{
       const toast = this.toastCtrl.create({
         message: 'Welcome',
         duration: 3000
       });
       toast.present();
       this.navCtrl.setRoot('TabsPage');
     }
   ).catch(
     (error)=>{
       const toast = this.toastCtrl.create({
         message: 'Uh Oh Something Went Wrong!',
         duration: 3000
       });
       toast.present();
     }
   )
 }
 ngAfterViewInit() {
  let tabs = document.querySelectorAll('.show-tabbar');
  if (tabs !== null) {
      Object.keys(tabs).map((key) => {
          tabs[key].style.display = 'none';
      });
  }
}

 resetPassword(email:string){
      this.navCtrl.setRoot('TabsPage');
    }
  }
