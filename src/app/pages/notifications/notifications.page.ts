import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, PopoverController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  

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
    private location: Location,

  ) { }

  ngOnInit() {
  }

   myBackButton(){
    this.location.back();
  }
}
