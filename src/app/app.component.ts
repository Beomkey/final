import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { MemberServiceProvider } from '../providers/member-service/member-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
  public memberService: MemberServiceProvider) {
    this.initializeApp();
    this.getMyMembers();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
  getMyMembers(){
    this.memberService.members$.subscribe((mems: Array<any>) => {
      this.pages = [
        { title: 'Edit Members', component: HomePage, icon: 'create' },
        { title: 'Friends', component: ListPage, icon: 'people' }
      ];
      for (let newMem of mems) {
        this.pages.push({ title: newMem.name, component: HomePage, icon: 'people' });
      }
    });
  }
}
