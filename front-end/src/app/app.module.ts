import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {AdminModule} from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {MatTabsModule} from '@angular/material/tabs';;
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/app.component';
import { HomeComponent } from './components/home/home.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import {MyCourseInfoComponent} from './components/my-course-info/my-course-info.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import {RegisterComponent} from './components/register/register.component';
import { AuthService } from './services/auth.service';
import {AccountService} from './services/account.service';
import {CoursesService} from './services/courses.service';
import {UrlPermission} from './urlPermission/url.permissions';
import {DataSharingService} from './services/data-sharing.service';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { CourseSectionComponent } from './components/course-section/course-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PortfolioComponent,
    ProfileComponent,
    ContactComponent,
    CoursesComponent,
    MyCoursesComponent,
    MyCourseInfoComponent,
    CourseInfoComponent,
    RegisterComponent,
    CourseSectionComponent
  ],
  exports : [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PortfolioComponent,
    ProfileComponent,
    ContactComponent,
    CoursesComponent,
    MyCoursesComponent,
    MyCourseInfoComponent,
    CourseInfoComponent,
    RegisterComponent,
    CourseSectionComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    AdminModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    MaterialModule,
    AdminModule,
    MatTabsModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AuthService,
      AccountService,
      UrlPermission,
      CoursesService,
      DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
