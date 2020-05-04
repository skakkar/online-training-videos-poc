import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { DataSharingService } from '../../services/data-sharing.service';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, public router: Router,
              private coursesService: CoursesService,
              private dataSharingService: DataSharingService,
              private accountService: AccountService) { }
  courseId;
  currentUser;
  courseInfo;
  isEnrolled:boolean = false;
  isAlreadyEnrolled;
  isUserLoggedIn:boolean;
  isAdmin:boolean = false;
  ngOnInit() {
      this.courseId = this.route.snapshot.queryParamMap.get('course');
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.isAdmin = this.currentUser.role == 'ADMIN' ? true: false;
      console.log("this.currentUser::"+JSON.stringify(this.currentUser));
      this.coursesService.getCourseByCourseId(this.courseId).subscribe(x => {
             this.courseInfo= x;
      });
      if(this.currentUser) {
        this.accountService.getStudentCourses(parseInt(this.currentUser.id)).subscribe(u => {
             let alreadyEnrolledCourse= u.filter(s => s.course.id == parseInt(this.courseId));
             this.isAlreadyEnrolled = alreadyEnrolledCourse.length > 0 ? true: false;;
        });
      }

      this.dataSharingService.isUserLoggedIn.subscribe( value => {
            this.isUserLoggedIn = value;
      });
  }

  enroll() {
    if(!this.currentUser) {
      let navigationExtras: NavigationExtras = {
              queryParams: {
                  "course": this.courseId
              }
          };
        this.router.navigate(['enroll'], navigationExtras);
    }else {
        this.coursesService.enrollToCourse(this.currentUser.id, this.courseId).subscribe(msg => {
                this.isEnrolled = true;
        });
    }
  }

}
