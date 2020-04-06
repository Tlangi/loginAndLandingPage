import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './authentication/login/login.component';
import {fakeBackendProvider} from './authentication/services/fake-backend-interceptor';
import {FlexModule} from '@angular/flex-layout';
import {ErrorInterceptorService} from './authentication/services/error-interceptor.service';
import {JwtInterceptorService} from './authentication/services/jwt-interceptor.service';
import { PageNotFoundComponent } from './errorHandler/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FlexModule,
  ],
  declarations: [AppComponent, AdminLayoutComponent, LoginComponent, PageNotFoundComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    fakeBackendProvider ],
  bootstrap: [AppComponent]
})
export class AppModule {}
