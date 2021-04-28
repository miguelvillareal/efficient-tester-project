import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiDjangoService } from '../services/api-django.service';
import {myID} from 'src/app/services/authentication.service';
import { Item } from 'src/app/services/storage.service';
import { Platform } from '@ionic/angular';
import {currentGroup} from 'src/app/lab-group/lab-group.page';

@Component({
  selector: 'app-addgroupmember',
  templateUrl: './addgroupmember.component.html',
  styleUrls: ['./addgroupmember.component.scss'],
})

export class AddgroupmemberComponent implements OnInit {
    
    selectedUser: number;

    groupID;

	  items: Item[] = [];

  constructor(
  private modalController: ModalController,
  private plt: Platform,
  private ApiService: ApiDjangoService) { 

    this.plt.ready().then(() => {
      this.loadItems();
      });
	}

  async close(){
	  await this.modalController.dismiss();
  }
  
   addMember(){
    if (this.ApiService.networkConnected) {
      this.ApiService.showLoading();
              console.log(myID);
              console.log(currentGroup)

              let labgroupMembershipToCreate = {
                "user": this.selectedUser,
                "group": this.groupID,
              }

              this.ApiService.createLabGroupMembership(labgroupMembershipToCreate).subscribe((res) => {
                if (res) {
                  console.log(res)
                }
                else {
                  this.ApiService.stopLoading();
                  this.ApiService.showError("An error occured while creating a membership")
                }
              });
    }
  }

  loadItems(){
    this.ApiService.getUsers().subscribe(items => {
      this.items = items["results"];
	  console.log(items["results"]);
    });
  }

  onSelect(item: Item): void {
    this.selectedUser = item.id;
    //this.redirect();
}
 
  ngOnInit() {}

}
