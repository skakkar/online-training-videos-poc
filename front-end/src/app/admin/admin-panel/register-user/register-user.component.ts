import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Student} from '../../../model/model.student';
import {StudentCourseInfo} from '../../../model/model.studentcourseinfo';
import {AccountService} from '../../../services/account.service';
import {CoursesService} from '../../../services/courses.service';
import { AuthService } from '../../../services/auth.service';
import { DataSharingService } from '../../../services/data-sharing.service';

import {Router, ActivatedRoute} from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  user: Student = new Student();
  errorMessage: string;
  courseVal;
  loginForm: FormGroup
  successMessage;
  studentCourseInfo: StudentCourseInfo;
  constructor(public accountService: AccountService,
              private formBuilder: FormBuilder,
              public router: Router,
              public route: ActivatedRoute,
              public coursesService: CoursesService,
              public authService: AuthService) { }

  ngOnInit() {
    this.buildLoginForm()
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(50)]],
    })
  }
  register(submittedForm: FormGroup) {
    if(this.loginForm.valid) {
      this.user.fullName = submittedForm.value.fullName;
      this.user.password = submittedForm.value.password;
      this.user.username = submittedForm.value.username;
      this.studentCourseInfo = {
        "courseId": 0,
        "student": this.user
      };
      this.accountService.createAccount(this.studentCourseInfo).subscribe(data => {
          this.authService.authenticate(this.user, (e) => {
            console.log(e);
            let resp: any;
            resp = e.principal;
            if (resp) {
              this.errorMessage='';
              this.loginForm.reset();
              this.successMessage = "Registered Successfully";
            }
          });
        }, err => {
          console.log(err);
          this.errorMessage = 'Username Already Exist';
        }
      );
    }
  }

}
