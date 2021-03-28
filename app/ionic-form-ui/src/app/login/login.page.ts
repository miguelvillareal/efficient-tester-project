import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import {ApiDjangoService} from '../services/api-django.service'
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registerCredentials = { email: '', password: '' };
 
  constructor(
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    public apiService: ApiDjangoService,
    private loadingController: LoadingController
  ) {}

  async  forgotPassword()  { 
    const alert = await this.alertController.create({
     header:"Please enter your email",
     message:"We will send you a password reset link",
     inputs: [
       {
         name: 'email',
         type: 'text'
       }],    
      buttons: [
           {
             text: 'Cancel',
             role: 'cancel',
             cssClass: 'secondary',
             handler: () => {
               console.log('Confirm Cancel');
             }
           }, {
             text: 'Ok',
             handler: (alertData) => { //takes the data 
               console.log(alertData.email);
               if (alertData.email){
                 //this.apiService.sendResetPasswordLink(alertData.email)

                 this.apiService.showLoading().then(()=>{
                  this.apiService.sendResetPasswordLink(alertData.email).subscribe(()=>{
                    this.apiService.stopLoading()
                 })
               })
               }
               else{
                 //Display error message
                 this.apiService.showError("Something went wrong");
               }
           }
           }
         ]
 });
 await alert.present();
 } 
 
  ngOnInit() {}
 
  async login() {

    if(this.apiService.networkConnected){
      this.apiService.showLoading();
      //let queryPath = "?email=" + this.registerCredentials.email + "&password=" + this.registerCredentials.password;
      let userToLogin = {
        "email": this.registerCredentials.email,
        "password": this.registerCredentials.password,
      }
      this.authService.login(userToLogin).then((listUsers) => {
        this.apiService.stopLoading();
        if (listUsers) {
          //console.log("Find " + JSON.stringify(listUsers));
          this.router.navigateByUrl('/main');
        }
        else {
          this.apiService.stopLoading();
          this.apiService.showError("Wrong login or password.");

        }
      })
    }
    else {
      this.apiService.showNoNetwork();
    }

  
  }
}