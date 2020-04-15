import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import {AboutUsComponent} from '../../pages/about-us/about-us.component';
import {AuthenticationGuardService} from '../../authentication/services/authentication-guard.service';
import {PageNotFoundComponent} from '../../pages/page-not-found/page-not-found.component';
import {ContactUsComponent} from '../../pages/contact-us/contact-us.component';
import {HomeComponent} from '../../pages/home/home.component';
import {AdminComponent} from '../../pages/adminFolder/admin/admin.component';
import {TeamsComponent} from '../../pages/teams/teams/teams.component';
import {ProjectsComponent} from '../../pages/projects/projects/projects.component';
import {ArchitectureComponent} from '../../pages/architecture/architecture/architecture.component';
import {InfrastructureComponent} from '../../pages/infrastructure/infrastructure/infrastructure.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent, canActivate: [AuthenticationGuardService]
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'architecture',
    component: ArchitectureComponent
  },
  {
    path: 'infrastructure',
    component: InfrastructureComponent
  },
  {
    path: 'admin',
    component: AdminComponent
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
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [AuthenticationGuardService]
  }
];
