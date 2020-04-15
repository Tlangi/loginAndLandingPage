import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import {AboutUsComponent} from '../../pages/about-us/about-us.component';
import {AuthenticationGuardService} from '../../authentication/services/authentication-guard.service';
import {PageNotFoundComponent} from '../../pages/page-not-found/page-not-found.component';
import {ContactUsComponent} from '../../pages/contact-us/contact-us.component';
import {HomeComponent} from '../../pages/home/home.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent, canActivate: [AuthenticationGuardService]
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent, canActivate: [AuthenticationGuardService]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [AuthenticationGuardService]
  }
];
