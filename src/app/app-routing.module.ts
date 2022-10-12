import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('../app/module/profile/profile.module').then((x) => x.ProfileModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/module/admin/dashboard/dashboard.module').then((x) => x.DashboardModule ),
  },
  {
    path: 'admin/report',
    loadChildren: () => import('../app/module/admin/report/report.module').then((x) => x.ReportModule ),
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
