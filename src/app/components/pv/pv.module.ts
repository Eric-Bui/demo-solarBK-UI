import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PvRoutes } from './pv.routing'
import { RouterModule } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { NavbarPvComponent } from './layout/navbar-pv/navbar-pv.component';
import { SidebarPvComponent } from './layout/sidebar-pv/sidebar-pv.component';



@NgModule({
  declarations: [ProjectListComponent, NavbarPvComponent, SidebarPvComponent],
  imports: [
    CommonModule, RouterModule.forChild(PvRoutes)
  ],
  exports: [
    NavbarPvComponent, SidebarPvComponent
  ]
})
export class PvModule { }
