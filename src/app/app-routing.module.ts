import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from './authentication/login/login.component';
import {AuthenticationGuardService} from './authentication/services/authentication-guard.service';
import {PageNotFoundComponent} from './errorHandler/page-not-found/page-not-found.component';
import {ContactUsComponent} from "./moreInfomation/contact-us/contact-us.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthenticationGuardService]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren:
          './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      },
    ],
    canActivate: [AuthenticationGuardService]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [AuthenticationGuardService]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
