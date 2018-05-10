import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginService} from './login/login.service';
import {HttpClientModule} from '@angular/common/http';
import {LoginActivate} from './login/login.activate';
import {GalleriesComponent} from './galleries/galleries.component';
import {GalleriesService} from './galleries/galleries.service';
import {BearerTokenService} from './bearer-token.service';
import { GalleryDetailsComponent } from './gallery-details/gallery-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    GalleriesComponent,
    GalleryDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    LoginActivate,
    GalleriesService,
    BearerTokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
