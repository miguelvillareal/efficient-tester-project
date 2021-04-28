import { Component, OnInit } from '@angular/core';
//import { Platform } from '@ionic/angular';
import { ApiDjangoService } from '../services/api-django.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  registerCredentials = { username: '', firstName: '', lastName: '', email: '', password: '', passwordbis: '' };

  constructor(public apiService: ApiDjangoService,
    public router: Router,
    public authService: AuthenticationService) { }

  ngOnInit() {
  }
  



  register() {

    if (this.registerCredentials.password != this.registerCredentials.passwordbis) {
      this.apiService.showError("Sorry passwords doesn't match");
    }
    else if(this.registerCredentials.password.length < 8 ){
      this.apiService.showError("Password has to be 8 or more characters");
    }
    else if (this.registerCredentials.username.length == 0 && this.registerCredentials.email.length == 0) {
      this.apiService.showError("Please enter your email and username");
    }
    else {
      
      if (this.apiService.networkConnected) {
        this.apiService.showLoading();

        // Check email
        let queryPath = '?email=' + this.registerCredentials.email;
        this.apiService.findUser(queryPath).subscribe((listUser) => {
          this.apiService.stopLoading()
          console.log(JSON.stringify(listUser))
          if (listUser) {
            let nbUserFound = listUser["count"]
            if (nbUserFound==0){
              let userToCreate = {
                "email": this.registerCredentials.email,
                "username": this.registerCredentials.username,
                "firstName": this.registerCredentials.firstName,
                "lastName": this.registerCredentials.lastName,
                "password": this.registerCredentials.password,
                "is_active": true,
                "is_staff": false
              }
  
              this.apiService.createUser(userToCreate).subscribe((resultat) => {
                if (resultat) {
                  let queryPath = "?email=" + userToCreate.email;
                  this.apiService.findUser(queryPath).subscribe((listUser) => { 
                    if(listUser){
                      //console.log(listUser.password)
                      //console.log(listUser.id)
                      let queryPathTwo = resultat.id;
                      let setUserInfo = {
                        "email": resultat.email,
                        "username": this.registerCredentials.username,
                        "firstName": this.registerCredentials.firstName,
                        "lastName": this.registerCredentials.lastName
                      }
                      this.apiService.infoUser(queryPathTwo, setUserInfo).subscribe((myUser) => { 
                        if(myUser){
                          console.log(myUser);
                        }
                      });

                      let labgroupToCreate = {
                        "name": this.registerCredentials.username,
                        "group_id": resultat.id
                      }
                
                      this.apiService.createLabGroups(labgroupToCreate).subscribe((res) => {
                      if (res) {
                        console.log(res)
                        let currentGroup = res.id;
                        let userID = resultat.id;
                        
                        let groupMembershipToCreate = {
                          "user": userID,
                          "group": currentGroup, 
                          "role": 1
                        }
                        this.apiService.createLabGroupMembership(groupMembershipToCreate).subscribe((res) => {
                          if (res) {
                            console.log(res)
                          }
                          else {
                            this.apiService.stopLoading();
                            this.apiService.showError("An error occured while creating a LabGroupMembership");
                          }
              
              
                        });   
                      }
                      else {
                        this.apiService.stopLoading();
                        this.apiService.showError("An error occured while creating a Lab Group");
                      }
                      
                    });

                  }
                  })
                  //console.log(resultat)

                }
                else {
                  this.apiService.stopLoading();
                  this.apiService.showError("An error occured while registering")
                }
              });

              //Put info about user in their profile
            }
            else{
              this.apiService.showError("An account already exists for this email, please login");
            }
           
          }
          else {
            
            this.apiService.showError("An error occured while registering")
         
          }
        });

      }
    }
  }
}
