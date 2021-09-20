<<<<<<< HEAD
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
=======
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

>>>>>>> a1e4a2b1cc8627727e2b729eb4e0f0277879c70d
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
=======
import { BrowserModule } from '@angular/platform-browser';
import { EducationService } from './services/educations/education.service';
import {HttpClientModule} from '@angular/common/http';
>>>>>>> a1e4a2b1cc8627727e2b729eb4e0f0277879c70d
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
<<<<<<< HEAD
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { MainNavComponent } from './main-nav/main-nav.component';
=======
import {MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
>>>>>>> a1e4a2b1cc8627727e2b729eb4e0f0277879c70d
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
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
<<<<<<< HEAD
    MatTableModule,
    MatDialogModule
=======
    MatMenuModule

  ],
  providers: [
    MatTableModule,
>>>>>>> a1e4a2b1cc8627727e2b729eb4e0f0277879c70d
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
