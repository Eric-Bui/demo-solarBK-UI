import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwhRoutes } from './swh.routing';
import { RouterModule } from '@angular/router';
import { GlobalModule } from '../../global/global.module';

import { ListProjectComponent } from './pages/list-project/list-project.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarSwhComponent } from './layout/sidebar-swh/sidebar-swh.component';
import { FooterSwhComponent } from './layout/footer-swh/footer-swh.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { StatusProjectComponent } from './pages/status-project/status-project.component';
import { ReportComponent } from './pages/report/report.component';
import { UserInfoComponent } from './../user-info/user-info.component';
import { UserChangepassComponent } from './../user-changepass/user-changepass.component';

@NgModule({
  declarations: [
    ListProjectComponent,
    NavbarComponent,
    SidebarSwhComponent,
    FooterSwhComponent,
    ProjectDetailComponent,
    StatusProjectComponent,
    ReportComponent,
    UserInfoComponent,
    UserChangepassComponent
  ],
  imports: [CommonModule,GlobalModule, RouterModule.forChild(SwhRoutes)],
  exports: [NavbarComponent, SidebarSwhComponent, FooterSwhComponent],
})
export class SwhModule {}
