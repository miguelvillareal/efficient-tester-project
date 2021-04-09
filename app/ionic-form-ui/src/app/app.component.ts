import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {ApiDjangoService} from '../app/services/api-django.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private authService: AuthenticationService,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public apiService : ApiDjangoService,
    private router: Router
  ) {
    this.initializeApp();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }

  accessAuthorizedWithUrl(){

  }

  getToken(){

  } 

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
