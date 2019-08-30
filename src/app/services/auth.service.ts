import { Injectable } from '@angular/core';
import { NavController, LoadingController, Platform, ToastController, MenuController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage'
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { BehaviorSubject } from 'rxjs';


export class User {
  email: string;
  password: string;
  displayName: string;
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = new BehaviorSubject(false);
  
  // public user:User = new User();


  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,

    public fAuth: AngularFireAuth,
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController, 
    private fb: Facebook,
    private gplus: GooglePlus,
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
   }


  // async signUp() {
  //   const loader = await this.loadingCtrl.create({
  //     duration: 2000
  //   });

  //   loader.present();
  //   loader.onWillDismiss().then(() => {
  //     this.navCtrl.navigateRoot('/home-results');
  //   });
  // }


  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }


  isAuthenticated() {
    return this.authState.value;
  }


  logout() {
    // this.navCtrl.navigateRoot('/');
    this.fAuth.auth.signOut();
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }


  async register(user: User) {
    try {
      var r = await this.fAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (r) {
        console.log("Successfully registered!");
      
    

        var ref = firebase.database().ref().child("users");
        var data = {
          displayName: user.displayName,
          email: user.email,
          id: r.user.uid,
          pic: "https://ui-avatars.com/api/?name="+user.displayName

        }
        ref.child(r.user.uid).set(data).then(function (ref) {
          console.log("Saved");
          // let user = firebase.auth().currentUser;
          // user.sendEmailVerification();
         
          // this. = true;
        })

        Swal.fire({
          title: 'Hello',
          text: "Thanks for joining Interior Junction",
          type: 'success',
          showCancelButton: false
       
        
        })


        this.navCtrl.navigateRoot('login');
      }

    } catch (err) {
      console.error(err);
    }
  }

  async login(user: User) {
    try {
      var r = await this.fAuth.auth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      if (r) {
        console.log("Successfully logged in!");

        var dummy_response = {
          user_id: user.email,
          user_name: user.displayName
        };
        this.storage.set('USER_INFO', dummy_response).then((response) => {
          // this.router.navigate(['/']);
          this.navCtrl.navigateRoot('/');
          this.authState.next(true);
        });

        


        // this.navCtrl.navigateRoot('/home-results');
      }

    } catch (err) {
      console.error(err);
      if(err.code == 'auth/invalid-email'){
    
     

        Swal.fire({
          title: 'Login Failed',
          text: "Please insert a valid email address",
          type: 'error',
          showCancelButton: false,
         
       
        
        })
    
    }
    

    if(err.code == 'auth/user-not-found'){
    



      Swal.fire({
        title: 'Login Failed',
        text: "There is no user corresponding to the credentials. If you are a new user please sign up first",
        type: 'error',
        showCancelButton: false,
     
     
      
      })
  
  }

   
    }
  }

  async loginWithFacebook() {
    try{
      var result = await this.fb.login(['email']);

      const fbCredential = firebase.auth.FacebookAuthProvider.credential(result.authResponse.accessToken);

      var a=await firebase.auth().signInWithCredential(fbCredential);

      if(a){
        console.log("Successfully logged in!");
        console.log(a);
        if (a.additionalUserInfo.isNewUser) {
          var ref = firebase.database().ref().child("users");
         var data = {
          displayName: a.additionalUserInfo.profile['name'],
          email: a.additionalUserInfo.profile['email'],
          id: a.user.uid,
          pic: a.additionalUserInfo.profile['picture'].data.url,

        }
        ref.child(a.additionalUserInfo.profile['id']).set(data).then(function (ref) {
          console.log("Saved");
          // let user = firebase.auth().currentUser;
          // user.sendEmailVerification();
         
          // this. = true;
        })

      

        Swal.fire({
          title: 'Hello',
          text: "Thanks for joining Interior Junction",
          type: 'success',
          showCancelButton: false
       
        
        })


        }
      

        var dummy_response = {
          user_id: a.additionalUserInfo.profile['email'],
          user_name: a.additionalUserInfo.profile['name']
        };
        this.storage.set('USER_INFO', dummy_response).then((response) => {
          // this.router.navigate(['/']);
          this.navCtrl.navigateRoot('/');
          this.authState.next(true);
        });

      
        // this.navCtrl.navigateRoot('/home-results');
      }
    }catch(err){
      console.log(err);
      console.error(err);
      console.error(err.errorMessage);

      if(err.errorMessage == 'Facebook error: net::ERR_CONNECTION_TIMED_OUT'){
    
        
      
          Swal.fire({
            title: 'Login Failed',
            text: "There is trouble connecting with facebook",
            type: 'error',
            showCancelButton: false,
        
         
          
          })
          
      }
     
    }

  }

  async nativeGoogleLogin(){
    try {
  
      const gplusUser = await this.gplus.login({
        'webClientId': '357057557892-dfhj5teghkscjcskjv7egek7bkhkbmle.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })
  
      var a=await this.fAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken));


   

      if(a){
        console.log("Successfully logged in!");
        console.log(a);

        var dummy_response = {
          user_id: a.additionalUserInfo.profile['email'],
          user_name: a.additionalUserInfo.profile['name']
        };
        this.storage.set('USER_INFO', dummy_response).then((response) => {
          // this.router.navigate(['/']);
          this.navCtrl.navigateRoot('/');
          this.authState.next(true);
        });



        // this.navCtrl.navigateRoot('/home-results');
      }
  
    } catch(err) {
      console.log(err)
    }
  }


  
}
