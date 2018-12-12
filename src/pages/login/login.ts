import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
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

 constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private database: DatabaseProvider, private loading: LoadingController, private alert: AlertController) {
  this.action = 'login';
}

 ionViewDidLoad() {
   console.log('ionViewDidLoad LoginPage');
 }

 register(form: NgForm) {
  const loading = this.loading.create({
    content: `Registering...`
  });
  this.database.registerUser(form.form.value.name, form.form.value.email, form.form.value.password).then(
    () => {
      this.navCtrl.push('TabsPage');
      loading.dismiss();
    }
  ).catch(Error =>{
    const alert = this.alert.create({
      message: Error.message,
      buttons: ['OK']
    })
    alert.present();
    loading.dismiss();
  })
}

login(form: NgForm) {
  const loading = this.loading.create({
    content: `Please Wait...Logging in`
  });
  
  this.database.login(form.form.value.email, form.form.value.password).then(
    (data) => {
      this.navCtrl.setRoot('TabsPage');
    }
  ).catch(
    (Error) => {
      const alert = this.alert.create({
        message: Error.message,
        buttons: ['OK']
      })
      alert.present();
      loading.dismiss();
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
showForgotPassword(){
  const prompt = this.alert.create({
    title: 'Enter Your Email',
    message: "A new password will be sent to your email",
    inputs: [
      {
        name: 'recoverEmail',
        placeholder: 'you@example.com'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Submit',
        handler: data => {
 
          const loader = this.loadingCtrl.create({
            content: "Please wait.. resetting your password",
            duration: 2000
          });
          loader.present();
 
          this.database.forgotUserPassword(data.recoverEmail).then(() =>{
            // add toast
            loader.dismiss().then(() => {
            //show pop up
            let alert = this.alert.create({
            title: 'Check your email',
            subTitle: 'Password reset succesful',
            buttons: ['OK']
            });
              alert.present();
            })
          },error =>{
            loader.dismiss().then(() => {
            let alert = this.alert.create({
            title: 'Error resseting password',
            subTitle:error.message,
            buttons: ['OK']
            });
            alert.present();
          })
          });
        }
      }
    ]
  });
  prompt.present();
  }

 resetPassword(email:string){
      this.navCtrl.setRoot('TabsPage');
    }
  }
