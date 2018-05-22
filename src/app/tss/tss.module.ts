import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TssRoutingModule } from './tss-routing.module';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TssRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormsComponent]
})
export class TssModule { }
