import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { SederhanaComponent } from './sederhana/sederhana.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    SederhanaComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
