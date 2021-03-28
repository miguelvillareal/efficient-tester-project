import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {myID} from 'src/app/services/authentication.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public isTrue: boolean = false;
  constructor(private authService: AuthenticationService, private router: Router) {}
 
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
  ngOnInit() {
    this.isTrue =false;
    console.log(myID);
  }

  ShowHide (){
    console.log(this.isTrue)
    if(this.isTrue ==false){
      this.isTrue= true
    }
    else{
      this.isTrue = false;
    }
  }
}
