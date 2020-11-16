import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PvRoutes } from './pv.routing';
import { RouterModule } from '@angular/router';

import { ProjectListComponent } from './pages/project-list/project-list.component';
import { NavbarPvComponent } from './layout/navbar-pv/navbar-pv.component';
import { SidebarPvComponent } from './layout/sidebar-pv/sidebar-pv.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { InfoWarrantyComponent } from './pages/warranty/info-warranty/info-warranty.component';
import { ListWarrantyComponent } from './pages/warranty/list-warranty/list-warranty.component';
import { DocumentComponent } from './pages/supports/document/document.component';
import { CreateRequestComponent } from './pages/supports/create-request/create-request.component';
import { InsureComponent } from './pages/insure/insure.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    NavbarPvComponent,
    SidebarPvComponent,
    StatisticComponent,
    InfoWarrantyComponent,
    ListWarrantyComponent,
    DocumentComponent,
    CreateRequestComponent,
    InsureComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(PvRoutes)],
  exports: [NavbarPvComponent, SidebarPvComponent],
})
export class PvModule {}
