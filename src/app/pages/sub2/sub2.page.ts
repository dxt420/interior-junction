import { Component, OnInit, HostBinding } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NavController, MenuController, PopoverController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.page.html',
  styleUrls: [
    './styles/sub2.page.scss',
    './styles/sub2.shell.scss'
  ]
})
export class Sub2Page implements OnInit {
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
