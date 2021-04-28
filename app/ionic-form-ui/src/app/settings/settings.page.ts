import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {myUserName} from 'src/app/services/authentication.service';
import {myEmail} from 'src/app/services/authentication.service';
import {myFirstName} from 'src/app/services/authentication.service';
import {myLastName} from 'src/app/services/authentication.service';
import {myID} from 'src/app/services/authentication.service';
import { ApiDjangoService } from '../services/api-django.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {
  userCredentials = { email: '',};
  public userName : string = null;
  public userEmail : string = null;
  public userFirstName : string = null;
  public userLastName : string = null;

  constructor(public apiService: ApiDjangoService) {
    this.userName = myUserName;
    this.userEmail = myEmail;
    this.userFirstName = myFirstName;
    this.userLastName = myLastName;
  }

  ngOnInit() {
    //console.log(myID);
  }

  updateEmail(){
    let queryPath = myID;
    let setUserInfo = {
      "email": this.userCredentials.email
    }
    this.apiService.infoUser(queryPath, setUserInfo).subscribe((myUser) => { 
      if(myUser){
        console.log(myUser);
      }
    });
  }

}
