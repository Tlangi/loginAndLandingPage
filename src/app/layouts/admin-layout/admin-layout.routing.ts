import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import {AboutUsComponent} from '../../pages/about-us/about-us.component';
import {ContactUsComponent} from '../../pages/contact-us/contact-us.component';
import {AuthenticationGuardService} from '../../authentication/services/authentication-guard.service';
import {PageNotFoundComponent} from '../../pages/page-not-found/page-not-found.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'aboutUs',
    component: AboutUsComponent,
    canActivate: [AuthenticationGuardService]
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationGuardService]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [AuthenticationGuardService]
  }
];
