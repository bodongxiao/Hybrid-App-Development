import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides:Slides;
  constructor(public navCtrl: NavController) {
  }
  goBack() {
    this.navCtrl.pop();
  }
  ionViewDidLoad(){
  }
  // change(){
  //   console.log( this.slides.getActiveIndex() );
  // }
}
