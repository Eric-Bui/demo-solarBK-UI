import { Routes } from "@angular/router";
import { ListProjectComponent } from './pages/list-project/list-project.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

export const SwhRoutes: Routes = [

    {
        path: 'list-project',
        component: ListProjectComponent
    },
    {
        path: 'project-detail',
        component: ProjectDetailComponent
    }

]