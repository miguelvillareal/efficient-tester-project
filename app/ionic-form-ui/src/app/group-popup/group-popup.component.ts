import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AddgroupmemberComponent} from 'src/app/addgroupmember/addgroupmember.component';
import {myID} from 'src/app/services/authentication.service';
import { currentGroup } from 'src/app/lab-group/lab-group.page';
import { ApiDjangoService } from '../services/api-django.service';

@Component({
  selector: 'app-group-popup',
  templateUrl: './group-popup.component.html',
  styleUrls: ['./group-popup.component.scss']
})
export class GroupPopupComponent implements OnInit {

	constructor(private modalController: ModalController,
		private ApiService: ApiDjangoService) { }

  async close(){
	  await this.modalController.dismiss();
  }

  checkAdmin(): boolean {
	this.ApiService.getLabGroupMembership().subscribe(items => {
		for (let index in items["results"]) {
			if (items["results"][index]["user"] == myID) {
				if (items["results"][index]["group"] == currentGroup) {
					if (items["results"][index]["role"] == 1) {
						return true;

					} else {
						return false;
					}
				}
			}

		}
	});
	return false;
}

  
  async addMember(){
	if(true){
	  const modal = await this.modalController.create({
		  component: AddgroupmemberComponent,
		  componentProps: {
			  groupID: currentGroup
		  }
	  })
	  await modal.present();
	}
	else {
		this.ApiService.showError("You cannot add members to this group as you are not an admin!")
	}
  }
	
	
  
  
  ngOnInit() {}

}