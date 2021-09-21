import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // enables the application to communicate with the backend services

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptorService } from './services/auth-interceptor.service'; // this will allow the app to automatically attach authorization information to requests
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { EducationService } from './services/educations/education.service';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [
    MatTableModule,
    LoginService,

    MatDialogModule,
    MatMenuModule,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }


  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
