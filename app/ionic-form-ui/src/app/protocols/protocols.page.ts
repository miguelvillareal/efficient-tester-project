import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController, IonList} from '@ionic/angular';
import { StorageService, Item } from 'src/app/services/storage.service';
import { ApiDjangoService } from '../services/api-django.service';
import {myID} from 'src/app/services/authentication.service';
import {currentGroup} from 'src/app/lab-group/lab-group.page';
import {groupName} from 'src/app/lab-group/lab-group.page';

export var protocolID:number;

@Component({
  selector: 'app-protocols',
  templateUrl: './protocols.page.html',
  styleUrls: ['./protocols.page.scss'],
})
export class ProtocolsPage implements OnInit{

  public userName : string = null;

  protocolCredentials = { name: '', plateType: '', numSamples: '', posRate: ''};
  
  selectedItem?: Item;

  infoAboutMe : any;

  creatorID='';

  items: Item[] = [];

  displayList: Item[] = [];

  newItem: Item = <Item>{};

  public currentGroupName : string = null;

  @ViewChild('mylist') mylist: IonList;

  constructor(private storageService: StorageService, 
    private plt: Platform,
    private ApiService: ApiDjangoService, 
    private toastController: ToastController, 
    private authService: AuthenticationService, 
    private router: Router) {
    
      this.currentGroupName = groupName;
     
    this.plt.ready().then(() => {
      this.loadItems("name");
    });
    
  }

  addProtocol(){
    if (this.ApiService.networkConnected) {
      this.ApiService.showLoading();
              console.log(myID);

              let protocolToCreate = {
                "name": this.protocolCredentials.name,
                "creator_ID": myID,
                "plate_type": this.protocolCredentials.plateType,
                "num_samples": this.protocolCredentials.numSamples,
                "suspected_pos_rate": this.protocolCredentials.posRate,
                "active_status": true,
                "lab_group": currentGroup
              }
  
              this.ApiService.createProtocol(protocolToCreate).subscribe((res) => {
                if (res) {
                  console.log(res)
                  this.loadItems("name");
                }
                else {
                  this.ApiService.stopLoading();
                  this.ApiService.showError("An error occured while creating a Protocol")
                }
              });
    }
  }

  sortByValue(property){
    return function(a,b){  
      if(a[property] > b[property])  
         return 1;  
      else if(a[property] < b[property])  
         return -1;  
  
      return 0;  
   } 
  }

  
  redirect() {
    this.router.navigateByUrl("/experiments");
   }
  

  onSelect(item: Item): void {
    this.selectedItem = item;
    protocolID = item.id;
    console.log(protocolID)
	  this.redirect();
  }
  
  loadItems(value){
    //console.log(currentGroup)
    this.displayList = [];
    this.ApiService.getProtocols().subscribe(items => {
      for (let index in items["results"]){
        let currentItem = items["results"][index]["lab_group"];

		 	  if(currentItem == currentGroup){
          let userId = items["results"][index]["creator_ID"];
        //console.log(userId)
        this.ApiService.getinfoUser(userId).subscribe((listUser) => { 
          if(listUser){
            //console.log(listUser.username)
            //this.userName = listUser.username;
            items["results"][index]["creator_ID"] = listUser.username;
            console.log(items["results"][index]["creator_ID"])
          }
        });
          this.displayList.push(items["results"][index]);
          this.displayList.sort(this.sortByValue(value));
        }
    }
    //console.log(this.displayList)
    });
  }

  ngOnInit(){

  }

}
