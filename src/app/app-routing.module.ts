import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { SwhComponent } from './components/swh/swh.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
      },
    ],
  },
  {
    path: 'swh',
    component: SwhComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/swh/swh.module').then(m => m.SwhModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
