import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  friends: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public af: AngularFireDatabase) {
    this.friends = af.list('/friends');
  }
  add() {
    let alert = this.alertCtrl.create({
      title: 'Add a Member',
      message: "Enter the member's information",
      inputs: [
        {
          name: 'name',
          placeholder: 'name'
        },
        {
          name: 'phone_number',
          placeholder: 'phone_number'
        },
        {
          name: 'address',
          placeholder: 'address'
        }        
      ],
      buttons: [
        {
          text: 'CANCEL',
          role: 'cancel'
        },
        {
          text: 'ADD',
          handler: data => {
            this.friends.push({name: data.name, phone_number: data.phone_number, address: data.address});
          }
        }
      ]
    })
    alert.present();
  }
  delete(friend: any) {
    this.friends.remove(friend);
  }
}
