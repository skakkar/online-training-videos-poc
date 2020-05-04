import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {CoursesService} from '../../../services/courses.service';

import {Router, ActivatedRoute} from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-register-course-content',
  templateUrl: './register-course-content.component.html',
  styleUrls: ['./register-course-content.component.scss']
})
export class RegisterCourseContentComponent implements OnInit {

  courses;
  registerCourseContentForm: FormGroup;
  errorMessage: string;
  successMessage:string;
  courseSections;

  constructor(private formBuilder: FormBuilder,
              public router: Router,
              public route: ActivatedRoute,
              public coursesService: CoursesService) { }

  ngOnInit() {
    this.buildLoginForm();
    this.coursesService.getAllCoursesList().subscribe(courses => {
        this.courses = courses;
        console.log("courses::"+JSON.stringify(this.courses));
    });
  }

  buildLoginForm() {
    this.registerCourseContentForm = this.formBuilder.group({
       sectionId : new FormControl(),
       name: ['', Validators.required],
       videoUrl: ['', [Validators.required]],
    })
  }
  getCourseSections(course: any) {
      this.courseSections = course.courseSections;
      console.log(" submittedForm.course::"+JSON.stringify(course));
  }
  register(submittedForm: FormGroup) {
    if(this.registerCourseContentForm.valid && submittedForm.value.sectionId) {
      console.log(" submittedForm.value::"+JSON.stringify(submittedForm.value));
      this.coursesService.regiserCourseContent(submittedForm.value).subscribe(data => {
            console.log("data"+data);
            if (data) {
              this.errorMessage='';
              this.registerCourseContentForm.reset();
              this.successMessage = "Registered Successfully";
            }
        }, err => {
          console.log(err);
          this.errorMessage = 'Course Content Already Exist';
        }
      );
    }

  }

}
