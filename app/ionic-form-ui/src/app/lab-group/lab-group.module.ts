import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabGroupPageRoutingModule } from './lab-group-routing.module';

import { LabGroupPage } from './lab-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabGroupPageRoutingModule
  ],
  declarations: [LabGroupPage]
})
export class LabGroupPageModule {}
