import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutes } from './admin.routing';
import { RouterModule } from '@angular/router';
import { GlobalModule } from '../../global/global.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { AdminInfoComponent } from './pages/admin-info/admin-info.component';
import { HeaderAdminComponent } from './layout/header/header-admin.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { OptionsComponent } from './pages/options/options.component';
import { LoggerComponent } from './pages/logger/logger.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';

//services
import { AdminService } from './services/admin.service';

@NgModule({
  declarations: [
    HomepageComponent,
    AdminInfoComponent,
    HeaderAdminComponent,
    SidebarComponent,
    FooterComponent,
    OptionsComponent,
    LoggerComponent,
    ProjectListComponent,
  ],
  imports: [
    CommonModule,
    GlobalModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminRoutes),
  ],
  providers: [AdminService],
  exports: [HeaderAdminComponent, SidebarComponent, FooterComponent],
})
export class AdminModule {}
