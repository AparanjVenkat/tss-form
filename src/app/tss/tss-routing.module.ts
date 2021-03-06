import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    path:'forms',
    component: FormsComponent
  },
  {
    path:'',
    component: FormsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TssRoutingModule { }
