import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SederhanaComponent } from './sederhana/sederhana.component';

const routes: Routes = [
  {
    path: '',
    component: SederhanaComponent
  },
  {
    path: 'sederhana',
    component: SederhanaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
