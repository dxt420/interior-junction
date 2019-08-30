import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-fashion-details',
  templateUrl: './fashion-details.page.html',
  styleUrls: [
    './styles/fashion-details.page.scss',
    './styles/fashion-details.shell.scss',
    './styles/fashion-details.ios.scss',
    './styles/fashion-details.md.scss'
  ]
})
export class FashionDetailsPage implements OnInit {
  
  colorVariants = [];
  sizeVariants = [];
  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };

  x;

  constructor(
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController
  ) { 
    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(JSON.parse(res.value));
      console.log(res.value);
     
      this.x = JSON.parse(res.value);
     

   
    
    });
  }

  ngOnInit(): void {
  
  }



 
}
