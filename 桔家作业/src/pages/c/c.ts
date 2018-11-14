import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OptionsPage } from '../options/options';

/**
 * Generated class for the CPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c',
  templateUrl: 'c.html',
})
export class CPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goSub(){
    this.navCtrl.push(OptionsPage,{id:1});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CPage');
  }

}
