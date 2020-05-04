import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {CoursesService} from '../../../services/courses.service';

import {Router, ActivatedRoute} from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms'


@Component({
  selector: 'app-register-course-section',
  templateUrl: './register-course-section.component.html',
  styleUrls: ['./register-course-section.component.scss']
})
export class RegisterCourseSectionComponent implements OnInit {
  courses;
  registerCourseSectionForm: FormGroup;
  errorMessage: string;
  successMessage:string;

  constructor(private formBuilder: FormBuilder,
              public router: Router,
              public route: ActivatedRoute,
              public coursesService: CoursesService) { }

  ngOnInit() {
    this.buildLoginForm();
    this.coursesService.getAllCoursesList().subscribe(courses => {
        this.courses = courses;
    });
  }

  buildLoginForm() {
    this.registerCourseSectionForm = this.formBuilder.group({
       couserId : new FormControl(),
       name: ['', Validators.required],
       description: ['', [Validators.required]],
    })
  }
  register(submittedForm: FormGroup) {
    console.log(" submittedForm.value::"+JSON.stringify(submittedForm.value));
    if(this.registerCourseSectionForm.valid && submittedForm.value.couserId) {
      this.coursesService.regiserCourseSection(submittedForm.value).subscribe(data => {
            if (data) {
              this.errorMessage='';
              this.registerCourseSectionForm.reset();
              this.successMessage = "Registered Successfully";
            }
        }, err => {
          console.log(err);
          this.errorMessage = 'Username Already Exist';
        }
      );
    }

  }

}
