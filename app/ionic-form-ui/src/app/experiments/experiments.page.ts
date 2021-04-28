import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController, IonList} from '@ionic/angular';
import { StorageService, Item } from 'src/app/services/storage.service';
import { ApiDjangoService } from '../services/api-django.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {myID} from 'src/app/services/authentication.service';
import {protocolID} from 'src/app/protocols/protocols.page';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.page.html',
  styleUrls: ['./experiments.page.scss'],
})
export class ExperimentsPage implements OnInit {
  expCredentials = { name: ''};
  
  selectedItem?: Item;

  infoAboutMe : any;

  items: Item[] = [];

  displayList: Item[] = [];

  displayListTwo: Item[] = [];

  newItem: Item = <Item>{};

  @ViewChild('mylist') mylist: IonList;

  constructor(private storageService: StorageService, 
    private plt: Platform,
    private ApiService: ApiDjangoService, 
    private toastController: ToastController, 
    private authService: AuthenticationService, 
    private router: Router,
    private inAppBrowser: InAppBrowser) {
     
    this.plt.ready().then(() => {
      this.loadItems("step_num");
    });
    
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

  addExperiment(){
    if (this.ApiService.networkConnected) {
      this.ApiService.showLoading();
              console.log(myID);
              let experimentToCreate = {
                "name":this.expCredentials.name,
                "user_notes": '{}',
                "step_num": 1,
                "protocol_used": protocolID,
                "current_interaction": '{}'
              }

              this.ApiService.createExperiment(experimentToCreate).subscribe((res) => {
                if (res) {
                  console.log(res)
                  this.loadItems("step_num");
                }
                else {
                  this.ApiService.stopLoading();
                  this.ApiService.showError("An error occured while creating a Experiment")
                }
              });

            //}
            //else{
            //  this.ApiService.showError("A Protocol already exists for this name and positive rate!");
            //}
          //}
          //else {
            
          //  this.ApiService.showError("An error occured while registering")
         
          //}
      //});
    }
  }
  refreshPage(){
    this.loadItems("step_num");
  }
  
  redirect(item) {
    this.inAppBrowser.create("http://35.153.231.217:8000/imageInteraction/?id=" + item.protocol_used + "&exp=" +item.id + "&userid=" + myID);
   }
  
  onSelect(item: Item): void {
    this.selectedItem = item;
    console.log(item)
	  this.redirect(item);
  }

  loadItems(value){
    this.displayList = [];
    this.ApiService.getExperiments().subscribe(items => {
      for (let index in items["results"]){
        let currentItem = items["results"][index]["protocol_used"];
        let loadedItem = items["results"][index]["completed_status"];
		 	  if(currentItem == protocolID){
          console.log(currentItem)
          if(loadedItem == "False"){
            this.displayList.push(items["results"][index]);
            this.displayList.sort(this.sortByValue(value));
          }
          else{
            this.displayListTwo.push(items["results"][index]);
            this.displayListTwo.sort(this.sortByValue(value));
          }
        }
    }
    console.log(this.displayList)
	  //console.log(items["results"][3]["protocol_used"]);
    });
  }

  ngOnInit() {
  }

}
