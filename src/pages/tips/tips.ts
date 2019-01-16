import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
<<<<<<< HEAD
  AlertController,
  Tabs,
  Button
=======
  AlertController
>>>>>>> 4d1b3da886996de30ba9522a8c71b0df1fc96502
} from "ionic-angular";
import { DatabaseProvider } from "../../providers/database/database";

@IonicPage()
@Component({
  selector: "page-tips",
  templateUrl: "tips.html"
})
export class TipsPage {
  action: string = 'fuel';
  buttonstate = 'not';

  username = this.navParams.get("key");
  comments = [];
  comments3 = [];
  newmessage;
  key;
  petrol = [
    {
      title: "Fill your tank in the morning",
      description:
        "In the mornings, however, when the temperature is cooler, fuel is denser, irrespective of whether it's in liquid form or gas. These petroleum products expand when they are warm, so due to the expansion you end up with a lesser percentage of fuel for the money you've paid, if you're filling up in the afternoon or during the day."
    },
    {
      title: "Do away with aggressive driving.",
      description:
        "Aggressive driving such as rapid acceleration, speeding and braking can lower your fuel mileage significantly. So accelerate smoothly, brake softer and earlier, and stay in one lane while it's safe to do so. Not only do these driving techniques save fuel, they can prolong the life of your brakes and tires."
    },
    {
      title: "Try not to use aircon.",
      description:
        "We know South African summers can be brutal, and even though using an aircon is more fuel efficient than driving with your windows down, it still increases fuel consumption. By using your aircon more judiciously, you can save fuel when driving."
    },
    {
      title: "Don’t overload your car",
      description:
        "This may seem obvious, but overloading your car makes the engine work harder, using more fuel in the process. Pack lightly, and remember to remove unused heavy items like bike racks,  or roof racks from your car when not in use."
    },
    {
      title: "Avoid short trips",
      description:
        "Trips of two kilometres or less use more fuel than longer trips. Even more so if your car’s engine is cold. Try not to make unnecessary trips to reduce your fuel bills."
    },
    {
      title: "Try to reduce idling time",
      description:
        "Wherever you can, try to not let your car idle for more than 30 seconds - rather switch it off. Also, try to avoid peak hour traffic where you can to save on your fuel consumption."
    },
    {
      title: "Don’t accelerate harshly",
      description:
        "Harsh acceleration contributes to higher fuel consumption. Rather look at pulling away from robots or stop streets slowly and gradually. Don’t overwork your engine by driving at too high revs, and if you drive an automatic car, accelerate on a light throttle for early gear changes."
    }
  ];
  gas = [
    {
      title: "Don't overcook your food.",
      description:
        "Overcooking not only waste gas it also waste food( over cooking or burning food)."
    },
    {
      title: "Defrost frozen food",
      description:
        "The heat energy that would be needed to bring down the food's temperature to room temperature will be saved."
    },
    {
      title: "Make sure the flame is colorless or blue",
      description:
        "Yellow flames are an indication that incomplete burning is taking place."
    }
  ];
  diesel = [
    {
      title: "Turn your engine off",
      description:
        "Excessive warm-up times can really sap the diesel fuel used, so avoid idling to help save fuel."
    },
    {
      title: "Use shore power when you can.",
      description:
        "This is also commonly known as truckstop electrification, and it allows drivers to plug in rather than idling and help to cool the vehicle while stopped."
    },
    {
      title: " Make fewer trips.",
      description:
        "Did you know that when you drive a car that has been parked for a few hours, the engine is cold and it uses much more fuel for the first five miles or so? Ideally combine all your daily errands into one big trip."
    },
    {
      title: "Utilize your cruise control.",
      description:
        "Maintaining a consistent speed through cruise control allows you to avoid using throttle to climb hills."
    }
  ];

  shownGroup = null;
  tabBar: any;
  @ViewChild('tabslist') tabs: Tabs;
  constructor(
    public toastCtrl: ToastController,
    private database: DatabaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.database.getuser().then(data => {
      console.log(data);
    });

    this.tabBar = <HTMLElement>document.querySelector('.tabbar');

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TipsPage");
    this.comments.length = 0;
    this.comments3.length = 0;
    console.log(this.comments3);
    this.getComments();
    this.database.getuser();
  }
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  }
  isGroupShown(group) {
    return this.shownGroup === group;
  }
  getComments() {
    this.database.getComments(this.newmessage).then((data: any) => {
      this.comments = data;

      var i = 0;
      for (var x = this.comments.length - 1; x >= 0; x--) {
        this.comments3[i] = this.comments[x];
        i++;
      }
      console.log(this.comments3);
    });
  }

  onMessageAdded(event: string) {
    let message = event;
    console.log(`message: ${message}`);
    console.log(`message type: ${typeof message}`)
    this.placeComment(message);
    this.buttonstate = 'not';
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.display = '';
      });
    }
  }
<<<<<<< HEAD

 

  sendMessage() {
    const alert = this.alertCtrl.create({
      title: 'Comment',
      message: 'Place you comment to the community',
      inputs: [
        {
          name: 'message',
          placeholder: '',
        },
      ],
      cssClass: 'alertCustomCss',
      buttons:[
        {
          text:'Cancel',
          handler: ()=>{}
        }
        ,{
        text: 'Send',
        handler: (data)=>{
          console.log(data.message)
          this.placeComment(data.message);
        }
      }]
    });
    alert.present();
  }

=======

>>>>>>> 4d1b3da886996de30ba9522a8c71b0df1fc96502
  placeComment(newmessage: string) {
    console.log(newmessage);
    if (newmessage.length > 0) {
      this.database
        .makeComment(this.username, newmessage)
        .then(data => {
<<<<<<< HEAD
          console.log(data)
=======
>>>>>>> 4d1b3da886996de30ba9522a8c71b0df1fc96502
          const toast = this.toastCtrl.create({
            message: "Your comment was saved",
            duration: 3000
          });
          toast.present();
        })
        .catch(error => {
          console.log(error);
        });
      this.comments.length = 0;
      newmessage = "";
      this.getComments();
    }

  }

  nextPage(page: string, fuel: string) {
    console.log(page, fuel);
    // if(fuel = 'gas'){

    // }else if(fuel = 'petrol'){
    //   this.navCtrl.push(page, {name: fuel, fuel: this.petrol});
    // }else if(fuel = 'diesel'){
    //   this.navCtrl.push(page, {name: fuel, fuel: this.diesel});
    // }else{
    //   console.log('invalid');
    // }

    switch (fuel) {
      case 'Gas': this.navCtrl.push(page, { name: fuel, fuel: this.gas, color: 'danger', code: '#f53d3d', picture: 'assets/imgs/gas cooking.jpg' });
        break;
      case 'Diesel': this.navCtrl.push(page, { name: fuel, fuel: this.diesel, color: 'dark2', code: '#565656', picture: 'assets/imgs/2018-jeep-wrangler-first-drive.jpg' });
        break;
      case 'Petrol': this.navCtrl.push(page, { name: fuel, fuel: this.petrol, color: 'petrol', code: '#FF8456', picture: 'assets/imgs/caltex01.jpg' });
        break;
      default: console.log('no way');
        break;
<<<<<<< HEAD
=======
    }
  }



  Sending() {

    this.buttonstate = 'sending';
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.display = 'none';
      });
>>>>>>> 4d1b3da886996de30ba9522a8c71b0df1fc96502
    }
  }



  Sending() {
    this.tabBar.style.display = 'none';

    // this.tabBar.style.height = 0;
    // this.tabBar.style.width = 0;
    this.buttonstate = 'sending';
    let tabs = <HTMLElement>document.querySelector('.show-tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.display = 'none';
      });
    }
  }

}
