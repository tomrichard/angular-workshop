import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContentComponent } from './core/layouts/admin-content/admin-content.component';
import { DashboardComponent } from './module/admin/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminContentComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../app/module/admin/dashboard/dashboard.module').then((x) => x.DashboardModule)
      }
    ],
  },
  {
    path: 'form',
    loadChildren: () => import('../app/module/forms/forms.module').then((x) => x.FormsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
