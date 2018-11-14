import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CPage } from '../c/c';

@IonicPage()
@Component({
  selector: 'page-b',
  templateUrl: 'b.html',
})
export class BPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goLogin(){
    this.navCtrl.push(LoginPage);
  }
  goCpage(){
    this.navCtrl.push(CPage);
  }
  ionViewDidLoad() {
    console.log(this.navParams.get('id'));
  }
}
