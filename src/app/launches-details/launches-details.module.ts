import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LaunchesDetailsPage } from './launches-details.page';

const routes: Routes = [
  {
    path: '',
    component: LaunchesDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LaunchesDetailsPage]
})
export class LaunchesDetailsPageModule {}
