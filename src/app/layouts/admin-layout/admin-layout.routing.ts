import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import {AboutUsComponent} from '../../pages/about-us/about-us.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
];
