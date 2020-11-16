import { Routes } from "@angular/router";
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { InfoWarrantyComponent } from './pages/warranty/info-warranty/info-warranty.component';
import { ListWarrantyComponent } from './pages/warranty/list-warranty/list-warranty.component';

export const PvRoutes: Routes = [
    {
        path: 'project-list',
        component: ProjectListComponent
    },
    {
        path: 'statistic',
        component: StatisticComponent
    },
    {
        path: 'info-warranty',
        component: InfoWarrantyComponent
    },
    {
        path: 'list-warranty',
        component: ListWarrantyComponent
    }
];