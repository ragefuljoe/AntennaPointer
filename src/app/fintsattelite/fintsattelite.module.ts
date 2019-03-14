import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FintsattelitePage } from './fintsattelite.page';

const routes: Routes = [
  {
    path: '',
    component: FintsattelitePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FintsattelitePage]
})
export class FintsattelitePageModule {}
