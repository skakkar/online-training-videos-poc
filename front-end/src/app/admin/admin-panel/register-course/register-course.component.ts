import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Student} from '../../../model/model.student';
import {CourseData} from '../../../model/model.coursedata';
import {CoursesService} from '../../../services/courses.service';
import { DataSharingService } from '../../../services/data-sharing.service';

import {Router, ActivatedRoute} from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.scss']
})
export class RegisterCourseComponent implements OnInit {
  courseData: CourseData;
  errorMessage: string;
  courseVal;
  registerCourseForm: FormGroup
  successMessage;
  constructor(private formBuilder: FormBuilder,
              public router: Router,
              public route: ActivatedRoute,
              public coursesService: CoursesService) { }

  ngOnInit() {
    this.buildLoginForm()
  }

  buildLoginForm() {
    this.registerCourseForm = this.formBuilder.group({
      name: ['', Validators.required],
      title: ['', [Validators.required, Validators.required]],
      description: ['', [Validators.required]],
      videoUrl: ['', [Validators.required]],
      sessionNumber:['', [Validators.required]],
    })
  }
  register(submittedForm: FormGroup) {
    if(this.registerCourseForm.valid) {
      this.coursesService.registerCourse(submittedForm.value).subscribe(data => {
            if (data) {
              this.errorMessage='';
              this.registerCourseForm.reset();
              this.successMessage = "Registered Successfully";
            }
        }, err => {
          console.log(err);
          this.errorMessage = 'Course already Exists';
        }
      );
    }
    //console.log(" submittedForm.value::"+JSON.stringify(submittedForm.value));

  }

}
