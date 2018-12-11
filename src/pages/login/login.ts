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
      content: `Registering ${form.form.value.email}...`
    });
    loading.present();
    this.database.registerUser(form.form.value.name, form.form.value.email, form.form.value.password).then(
      (data) => {
        loading.dismiss();
        this.navCtrl.setRoot('MapPage');
      }
    ).catch(
      (error) => {
        const alert = this.alert.create({
          message: 'There Was An Error Logging You In, Please Enter Your Correct Credentials',
          buttons: ['Ok']
        });

        alert.present();
      }
    )
  }

  login(form: NgForm) {
    const loading = this.loading.create({
      content: `Registering ${form.form.value.email}...`
    });
    loading.present();
    this.database.login(form.form.value.email, form.form.value.password).then(
      (data) => {
        loading.dismiss();
        this.navCtrl.setRoot('TabsPage');
      }
    ).catch(
      (error) => {
        const alert = this.alert.create({
          message: 'There Was An Error Logging You In, Please Enter Your Correct Credentials',
          buttons: ['Ok']
        });

        alert.present();
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

  resetPassword(email: string) {
    this.navCtrl.setRoot('TabsPage');
  }
}
