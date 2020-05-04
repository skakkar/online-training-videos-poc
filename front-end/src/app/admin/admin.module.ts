import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {AdminRoutingModule} from './admin-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material';
import { RegisterUserComponent } from './admin-panel/register-user/register-user.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterCourseComponent } from './admin-panel/register-course/register-course.component';
import { RegisterCourseSectionComponent } from './admin-panel/register-course-section/register-course-section.component';
import { RegisterCourseContentComponent } from './admin-panel/register-course-content/register-course-content.component';

@NgModule({
  declarations: [AdminPanelComponent, RegisterUserComponent, RegisterCourseComponent, RegisterCourseSectionComponent, RegisterCourseContentComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatCardModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
