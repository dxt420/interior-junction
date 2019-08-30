import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';





@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displayName;
  pic;
  userProfile;
  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public authenticationService: AuthService,
    private router: Router,
    public fAuth: AngularFireAuth
  ) {
   

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.fAuth.authState.subscribe((user: firebase.User) => {
        if (user) {

          this.userProfile = user;
          console.log("The user is logged in!"); 
          console.log(user); 
  
        
         this.displayName = firebase.database().ref().child("users").child(user.uid).once('value').then(function (snapshot) {
          console.log(snapshot.val().displayName);
         
          return (snapshot.val() && snapshot.val().displayName) || ' ';
    
        });;
  
       
        this.pic = firebase.database().ref().child("users").child(user.uid).once('value').then(function (snapshot) {
          return (snapshot.val() && snapshot.val().pic) || ' ';
    
        });;
  
  
          
         
          
  
          
  
        }
        return;
      });



      this.authenticationService.authState.subscribe(state => {
        if (state) {
          

          
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['login']);
        }
      });



    }).catch(() => {});


    
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    // this.navCtrl.navigateRoot('/');
    this.authenticationService.logout();
  }
}
