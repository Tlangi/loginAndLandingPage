import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from '../../pages/about-us/about-us.component';
import {ContactUsComponent} from '../../pages/contact-us/contact-us.component';
import {PageNotFoundComponent} from '../../pages/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent
  ]
})
export class AdminLayoutModule {}
