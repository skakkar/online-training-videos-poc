import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms'


import {Student} from '../../model/model.student';
import {StudentCourseInfo} from '../../model/model.studentcourseinfo';
import {AccountService} from '../../services/account.service';
import {CoursesService} from '../../services/courses.service';
import { AuthService } from '../../services/auth.service';
import { DataSharingService } from '../../services/data-sharing.service';

@Component( {
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  user: Student = new Student();
  errorMessage: string;
  courseVal;
  loginForm: FormGroup
  studentCourseInfo: StudentCourseInfo;

  constructor(public accountService: AccountService,
              private formBuilder: FormBuilder,
              public router: Router,
              public route: ActivatedRoute,
              public coursesService: CoursesService,
              public dataSharingService: DataSharingService,
              public authService: AuthService) {
  }

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
    this.user.fullName = submittedForm.value.fullName;
    this.user.password = submittedForm.value.password;
    this.user.username = submittedForm.value.username;
    let courseId = this.route.snapshot.queryParamMap.get('course');
    courseId = courseId == null ? "0": courseId;
    this.courseVal = courseId;
    if(parseInt(courseId) != 0) {
      this.coursesService.getCourseByCourseId(courseId).subscribe(x => {
              this.studentCourseInfo = {
                "courseId": parseInt(courseId),
                "student": this.user
              };
              this.accountService.createAccount(this.studentCourseInfo).subscribe(data => {
                  this.authService.authenticate(this.user, (e) => {
                    let resp: any;
                    resp = e.principal;
                    if (resp) {
                      // store user details  in local storage to keep user logged in between page refreshes
                      localStorage.setItem('currentUser', JSON.stringify(resp));
                      this.dataSharingService.isUserLoggedIn.next(true);
                      this.router.navigate(['/profile']);
                    }
                  });
                }, err => {
                  console.log(err);
                  this.errorMessage = 'username already exist';
                }
              );
      });
    }else {
        this.studentCourseInfo = {
          "courseId": parseInt(courseId),
          "student": this.user
        };
        this.accountService.createAccount(this.studentCourseInfo).subscribe(data => {
            this.authService.authenticate(this.user, (e) => {
              let resp: any;
              resp = e.principal;
              if (resp) {
                localStorage.setItem('currentUser', JSON.stringify(resp));
                this.dataSharingService.isUserLoggedIn.next(true);
                this.router.navigate(['/profile']);
              }
            });
          }, err => {
            console.log(err);
            this.errorMessage = 'username already exist';
          }
        );
    }
  }

 login() {
   let courseId = this.route.snapshot.queryParamMap.get('course');
   courseId = courseId == null ? "0": courseId;
   this.router.navigate(['/login', courseId]);
 }

}
