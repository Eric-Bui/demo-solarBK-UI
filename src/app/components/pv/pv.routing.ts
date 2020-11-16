import { Routes } from "@angular/router";
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { InfoWarrantyComponent } from './pages/warranty/info-warranty/info-warranty.component';
import { ListWarrantyComponent } from './pages/warranty/list-warranty/list-warranty.component';
import { DocumentComponent } from './pages/supports/document/document.component';
import { CreateRequestComponent } from './pages/supports/create-request/create-request.component';
import { InsureComponent } from './pages/insure/insure.component';

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
    },
    {
        path: 'create-request',
        component: CreateRequestComponent
    },
    {
        path: 'reference',
        component: DocumentComponent
    },
    {
        path: 'insure',
        component: InsureComponent
    }

];