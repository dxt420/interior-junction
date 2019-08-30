import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, PopoverController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { SearchFilterPage } from '../modal/search-filter/search-filter.page';
import { ImagePage } from '../modal/image/image.page';
import { NotificationsComponent } from 'src/app/components/notifications/notifications.component';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  ngOnInit(){
   
  }

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) {

  }



  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

}
