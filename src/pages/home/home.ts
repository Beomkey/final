import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  members: Array<any> = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.members = [
    {name:'Father', phone_number: '010-1234-0000', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 벧엘관'}, 
    {name:'Mother', phone_number: '010-1234-0001', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 은혜관'}, 
    {name:'Sister', phone_number: '010-1234-0002', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 창조관'}, 
    {name:'Brother', phone_number: '010-1234-0003', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 비전관'} 
  ];
  }

  addMember() {
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
            this.members.push({name: data.name, phone_number: data.phone_number, address: data.address});
          }
        }
      ]
    })
    alert.present();
  }
  delete(member: any) {
    let index = this.members.indexOf(member);
    if (index > -1) 
      this.members.splice(index, 1);
  }
}
