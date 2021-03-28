import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController, IonList} from '@ionic/angular';
import { StorageService, Item } from 'src/app/services/storage.service';
import { ApiDjangoService } from '../services/api-django.service';
import {myID} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-lab-group',
  templateUrl: './lab-group.page.html',
  styleUrls: ['./lab-group.page.scss'],
})
export class LabGroupPage implements OnInit {
  labGroupCredentials = { myName: ''};
  
  selectedItem?: Item;

  infoAboutMe : any;

  group_id='';

  items: Item[] = [];

  newItem: Item = <Item>{};

  @ViewChild('mylist') mylist: IonList;

  constructor(private storageService: StorageService, 
    private plt: Platform,
    private ApiService: ApiDjangoService, 
    private toastController: ToastController, 
    private authService: AuthenticationService, 
    private router: Router) {
     
    this.plt.ready().then(() => {
      this.loadItems();
    });
    
  }

  addLabGroup(){
    if (this.ApiService.networkConnected) {
      this.ApiService.showLoading();
              console.log(myID);
              let labgroupToCreate = {
                "name": this.labGroupCredentials.myName,
                "group_id": myID,
              }
  
              this.ApiService.createLabGroups(labgroupToCreate).subscribe((res) => {
                if (res) {
                  console.log(res)
                }
                else {
                  this.ApiService.stopLoading();
                  this.ApiService.showError("An error occured while creating a Protocol")
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
  
  redirect() {
    this.router.navigateByUrl("/experiments");
   }
  
  onSelect(item: Item): void {
	  this.selectedItem = item;
	  this.redirect();
  }
  
    /** 
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();
    this.storageService.addItem(this.newItem).then(item => {
      this.newItem = <Item>{};
      //this.showToast('Item added!')
      this.loadItems();
    });
  }
  **/

  loadItems(){
    this.ApiService.getLabGroups().subscribe(items => {
      this.items = items["results"];
	  console.log(items["results"]);
    });
  }

  /**
  updateItem(item: Item){
    item.title = 'UPDATED: ${item.title}';
    item.modified = Date.now();
    this.storageService.updateItem(item).then(item => {
      this.showToast('Item updated!');
      this.mylist.closeSlidingItems();
      this.loadItems();
    });
  }
  deleteItem(item: Item){
    this.storageService.deleteItem(item.id).then(item => {
      this.showToast('Item removed!');
      this.mylist.closeSlidingItems();
      this.loadItems();
    });
  }
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  **/
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  ngOnInit(){

  }

}