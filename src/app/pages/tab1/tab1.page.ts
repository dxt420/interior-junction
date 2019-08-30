import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, PopoverController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

 

  x;

  ngOnInit() {

  }


  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public dataService: DataService,
    private router: Router,
    public activatedRoute : ActivatedRoute,


  ) {
 
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }


  


  goToNotifications() {
    this.router.navigate(['/notifications']);
  }

  goToSub(itemCategory) {
   
     this.router.navigate(['/tabs/tab1/sub'],{
      queryParams: {
         value :  JSON.stringify(itemCategory)

        },
      });


  }




}
