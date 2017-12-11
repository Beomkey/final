import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  friends: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.friends = [ 
      {name:'Jack', phone_number: '010-1111-9999', address: '포항시 북구 흥해읍 한동대학교 벧엘관'}, 
      {name:'Bobby', phone_number: '010-3333-4444', address: '포항시 북구 흥해읍 한동대학교 은혜관'} 
  ];
  }
}
