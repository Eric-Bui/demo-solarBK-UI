import { Routes } from "@angular/router";

import { HomepageComponent } from './pages/homepage/homepage.component';
import { AdminInfoComponent } from './pages/admin-info/admin-info.component';
import { OptionsComponent } from './pages/options/options.component';
import { LoggerComponent } from './pages/logger/logger.component';
import { ProjectListComponent } from './pages/project-list/project-list.component'

export const AdminRoutes: Routes = [
  {
      path: "homepage",
      component: HomepageComponent
  },
  {
    path: "admin-info",
    component: AdminInfoComponent
  },
  {
    path: "options",
    component: OptionsComponent
  },
  {
    path: "logger",
    component: LoggerComponent
  },
  {
    path: "project-list",
    component: ProjectListComponent
  } 
];