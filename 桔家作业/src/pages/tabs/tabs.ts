import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MidPage } from '../mid/mid';
import { ModalController } from 'ionic-angular';
// import { ShopPage } from '../shop/shop';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = 'ShopPage';
  tab3Root = ContactPage;
  tab4Root = 'IdeasPage';
  tab5Root = 'CPage';
  // tab6Root = 'MidPage';

  constructor(public modalCtrl: ModalController) {

  }
  ionViewDidLoad(){
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let profileModal = this.modalCtrl.create(MidPage);
      profileModal.present();
    },false)
    
  }
}
