import { Component, OnInit, HostBinding } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: [
    './styles/deals.page.scss',
    './styles/deals.shell.scss'
  ]
})
export class DealsPage implements OnInit {


 x;

  constructor(public route: ActivatedRoute,private router: Router) { 
    this.route.queryParams.subscribe((res)=>{
      console.log(JSON.parse(res.value));
      console.log(res.value);
     
      this.x = JSON.parse(res.value);

    });
  }

  ngOnInit(): void {
   
  }


  goToSub(itemCategory) {
   
    this.router.navigate(['/tabs/tab1/sub1'],{
     queryParams: {
        value :  JSON.stringify(itemCategory)

       },
     });


 }
}
