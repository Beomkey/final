import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HomePage } from '../../pages/home/home';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()

export class MemberServiceProvider {
  members: Array<any>;
  membersSubject: BehaviorSubject<Array<any>>
  = new BehaviorSubject([]);
  members$: Observable<Array<any>>
  = this.membersSubject.asObservable();

  constructor() {
    this.members = [
      {name:'Father', phone_number: '010-1234-0000', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 벧엘관'}, 
      {name:'Mother', phone_number: '010-1234-0001', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 은혜관'}, 
      {name:'Sister', phone_number: '010-1234-0002', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 창조관'}, 
      {name:'Brother', phone_number: '010-1234-0003', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 비전관'} 
    ];
    this.refresh();
    }
    getMembers() {
      return Promise.resolve(this.members);
    }
    removeMember(member: any) {
      let index = this.members.indexOf(member)
      if (index != -1) {
        this.members.splice(index, 1);
        this.refresh();
      }
    }
    addMember(member: any) {
      this.members.push(member);
      this.refresh();
    }
    refresh() {
      this.membersSubject.next(this.members);
    }
}