import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, PopoverController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.page.html',
  styleUrls: [
   
 
  ],
})
export class SubPage implements OnInit {

  x;

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
    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(JSON.parse(res.value));
      console.log(res.value);
     
      this.x = JSON.parse(res.value);
     

   
    
    });
   }

  ngOnInit() {
  }

}
