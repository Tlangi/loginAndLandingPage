import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from '../../pages/about-us/about-us.component';
import {PageNotFoundComponent} from '../../pages/page-not-found/page-not-found.component';
import {ContactUsComponent} from '../../pages/contact-us/contact-us.component';
import {HomeComponent} from '../../pages/home/home.component';
import {AdminComponent} from '../../pages/adminFolder/admin/admin.component';
import {LoginComponent} from '../../authentication/login/login.component';
import {TeamsComponent} from '../../pages/teams/teams/teams.component';
import {ProjectsComponent} from '../../pages/projects/projects/projects.component';
import {ArchitectureComponent} from '../../pages/architecture/architecture/architecture.component';
import {InfrastructureComponent} from '../../pages/infrastructure/infrastructure/infrastructure.component';
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatTabsModule,
  ],
  declarations: [
    DashboardComponent,
    AboutUsComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    AdminComponent,
    TeamsComponent,
    ProjectsComponent,
    ArchitectureComponent,
    InfrastructureComponent
  ]
})
export class AdminLayoutModule {}
