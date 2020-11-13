import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwhRoutes } from './swh.routing'
import { RouterModule } from '@angular/router';
import { ListProjectComponent } from './pages/list-project/list-project.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarSwhComponent } from './layout/sidebar-swh/sidebar-swh.component';
import { FooterSwhComponent } from './layout/footer-swh/footer-swh.component';


@NgModule({
  declarations: [ListProjectComponent, NavbarComponent, SidebarSwhComponent, FooterSwhComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SwhRoutes),
  ],
  exports: [
    NavbarComponent, SidebarSwhComponent, FooterSwhComponent
  ]
})
export class SwhModule { }
