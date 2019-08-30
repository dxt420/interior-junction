import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { NavController, MenuController, PopoverController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-fashion-listing',
  templateUrl: './fashion-listing.page.html',
  styleUrls: [
    './styles/fashion-listing.page.scss',
    './styles/fashion-listing.shell.scss'
  ]
})
export class FashionListingPage implements OnInit {
  ngOnInit(): void {
   
  }
 
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


  goToSub(itemCategory) {
   
    this.router.navigate(['/tabs/tab1/sub2'],{
     queryParams: {
        value :  JSON.stringify(itemCategory)

       },
     });


 }
}
