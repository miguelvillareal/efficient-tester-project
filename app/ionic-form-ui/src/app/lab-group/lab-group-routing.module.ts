import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabGroupPage } from './lab-group.page';

const routes: Routes = [
  {
    path: '',
    component: LabGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabGroupPageRoutingModule {}
