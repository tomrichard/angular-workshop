import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    AdminContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, AppRoutingModule
  ]
})
export class LayoutsModule { }
