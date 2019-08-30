import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

export class User {
  email: string;
  password: string;
  displayName: string;
}




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;

  public user:User = new User();


  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public authenticationService: AuthService,
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'displayName': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  googleLogin() {
  
    this.authenticationService.nativeGoogleLogin();

}


facebookLogin() {
  
  this.authenticationService.loginWithFacebook();

}

register() {
  this.authenticationService.register(this.user);
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

  // // //
  goToLogin() {
    this.navCtrl.navigateRoot('/login');
  }
}
