import { Routes } from "@angular/router";
import { ListProjectComponent } from './pages/list-project/list-project.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { StatusProjectComponent } from './pages/status-project/status-project.component';
import { ReportComponent } from './pages/report/report.component';
import { UserInfoComponent } from './../user-info/user-info.component';
import { UserChangepassComponent } from './../user-changepass/user-changepass.component';

export const SwhRoutes: Routes = [

    {
        path: 'list-project',
        component: ListProjectComponent
    },
    {
        path: 'project-detail',
        component: ProjectDetailComponent
    },
    {
        path: 'project-status',
        component: StatusProjectComponent
    },
    {
        path: 'report',
        component: ReportComponent
    },
    {
        path: 'user-info',
        component: UserInfoComponent
    },
    {
        path: 'change-password',
        component: UserChangepassComponent
    }
]