import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tips',
  templateUrl: 'tips.html',
})


export class TipsPage {
 petrol = [
    { title: "Fill your tank in the morning", description: "In the mornings, however, when the temperature is cooler, fuel is denser, irrespective of whether it's in liquid form or gas. These petroleum products expand when they are warm, so due to the expansion you end up with a lesser percentage of fuel for the money you've paid, if you're filling up in the afternoon or during the day."},
    { title: "Do away with aggressive driving.", description: "Aggressive driving such as rapid acceleration, speeding and braking can lower your fuel mileage significantly. So accelerate smoothly, brake softer and earlier, and stay in one lane while it's safe to do so. Not only do these driving techniques save fuel, they can prolong the life of your brakes and tires." },
    { title: "Try not to use aircon.", description: "We know South African summers can be brutal, and even though using an aircon is more fuel efficient than driving with your windows down, it still increases fuel consumption. By using your aircon more judiciously, you can save fuel when driving." },
    { title: "Don’t overload your car", description: "This may seem obvious, but overloading your car makes the engine work harder, using more fuel in the process. Pack lightly, and remember to remove unused heavy items like bike racks,  or roof racks from your car when not in use." },
    { title: "Avoid short trips", description: "Trips of two kilometres or less use more fuel than longer trips. Even more so if your car’s engine is cold. Try not to make unnecessary trips to reduce your fuel bills." },
    { title: "Try to reduce idling time", description: "Wherever you can, try to not let your car idle for more than 30 seconds - rather switch it off. Also, try to avoid peak hour traffic where you can to save on your fuel consumption." },
    { title: "Don’t accelerate harshly", description: "Harsh acceleration contributes to higher fuel consumption. Rather look at pulling away from robots or stop streets slowly and gradually. Don’t overwork your engine by driving at too high revs, and if you drive an automatic car, accelerate on a light throttle for early gear changes." },
    ]; 
    gas = [
    { title: "Don't overcook your food.", description: "Overcooking not only waste gas it also waste food( over cooking or burning food)." },
    { title: "Defrost frozen food", description: "The heat energy that would be needed to bring down the food's temperature to room temperature will be saved."},
    { title: "Make sure the flame is colorless or blue", description: "Yellow flames are an indication that incomplete burning is taking place." },
    ];
   diesel = [
      { title: "Turn your engine off", description: "Excessive warm-up times can really sap the diesel fuel used, so avoid idling to help save fuel."},
      { title: "Use shore power when you can.", description: "This is also commonly known as truckstop electrification, and it allows drivers to plug in rather than idling and help to cool the vehicle while stopped." },
      { title: " Make fewer trips.", description: "Did you know that when you drive a car that has been parked for a few hours, the engine is cold and it uses much more fuel for the first five miles or so? Ideally combine all your daily errands into one big trip." },
      { title: "Utilize your cruise control.", description: "Maintaining a consistent speed through cruise control allows you to avoid using throttle to climb hills." }, 
    ]; 

  shownGroup = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TipsPage');
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


