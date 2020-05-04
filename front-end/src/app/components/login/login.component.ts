import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Student } from '../../model/model.student';
import { AuthService } from '../../services/auth.service';
import {CoursesService} from '../../services/courses.service';
import { Router , ActivatedRoute, NavigationExtras} from '@angular/router';
import { Observable } from 'rxjs';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms'
import { DataSharingService } from '../../services/data-sharing.service';
import { Location } from '@angular/common';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  user: Student = new Student();
  errorMessage: string;
  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private coursesService: CoursesService,
              private formBuilder: FormBuilder,
              private dataSharingService: DataSharingService,
              private location: Location) { }


  ngOnInit() {
    this.buildLoginForm()
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(50)]],
    })
  }


  courseVal: any;
  create() {
    this.courseVal = this.route.snapshot.queryParamMap.get('course');
    this.courseVal = this.courseVal == null ? "0": this.courseVal;
    this.router.navigate(['/register', this.courseVal]);
  }

  login(submittedForm: FormGroup) {
    let courseId = this.route.snapshot.paramMap.get('course');
    this.courseVal = courseId == null ? "0": courseId;
    this.user.username = submittedForm.value.username;
    this.user.password = submittedForm.value.password;
    console.log("login is called*************"+JSON.stringify(this.user));
    this.authService.authenticate(this.user, (e) => {
      console.log("e:"+e);
      let resp: any;
      if(e) {
      resp = e.principal;
      if(this.courseVal !=0) {
          this.coursesService.enrollToCourse(resp.id, this.courseVal).subscribe(result => {
            let navigationExtras: NavigationExtras = {
                  queryParams: {
                        "isEnrolled": "Enrolled"
                }
            };
            this.router.navigate(['courses'], navigationExtras); //profile
          });
      }else{
        console.log("else");
        if (resp) {
          localStorage.setItem('currentUser', JSON.stringify(resp));
          this.dataSharingService.isUserLoggedIn.next(true);
          this.router.navigateByUrl('/profile'); //profile
        }

      }
    } else {
        //console.log("****************");
        this.errorMessage = 'Invalid Credentials';
      }
    }
  );
  }
}
