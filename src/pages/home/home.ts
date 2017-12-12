import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MemberServiceProvider } from '../../providers/member-service/member-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public members: Array<any> = [];
  searchRes: Array<any> = [];
  searchQuery: string = "";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
  public memberService: MemberServiceProvider) {
    memberService.members$.subscribe((members: Array<any>) => {
      this.members = members;
    });
  this.searchRes = this.members;  
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
            this.memberService.addMember({name: data.name, phone_number: data.phone_number, address: data.address});
          }
        }
      ]
    })
    alert.present();
  }
  delete(member: any) {
    this.memberService.removeMember(member);
  }
  initializeItems() {
    this.searchRes = this.members;
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.searchRes = this.searchRes.filter((item: any) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
