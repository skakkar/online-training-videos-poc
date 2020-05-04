import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './core/app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { MyCourseInfoComponent } from './components/my-course-info/my-course-info.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import {RegisterComponent} from './components/register/register.component';
import {CourseSectionComponent} from './components/course-section/course-section.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'my-courses', component: MyCoursesComponent },
  { path: 'my-course-info', component: MyCourseInfoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'main', component: AppComponent  },
  { path: 'courses', component: CoursesComponent},
  { path: 'view', component: CourseInfoComponent },
  { path: 'enroll', component: RegisterComponent },
  { path: 'course-section', component: CourseSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
