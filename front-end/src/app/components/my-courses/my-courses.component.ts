import {Student} from '../../model/model.student';
import {CoursesService} from '../../services/courses.service';
import {AccountService} from '../../services/account.service';
import { Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { overlayConfigFactory } from 'ngx-modialog';
import { Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import { PortfolioComponent } from '../../components/portfolio/portfolio.component';


@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  currentUser: Student;
  courses:any[];
  videos:any[];
  mySubscription: any;
  onlineCourses:any[];

  constructor(private coursesService: CoursesService,
              private router: Router,
              private accountService: AccountService) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
                return false;
        };
        this.mySubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
              // Trick the Router into believing it's last link wasn't previously loaded
            this.router.navigated = false;
        }
    });
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.accountService.getStudentCourses(parseInt(this.currentUser.id)).subscribe(u => {
         this.courses = u;
         this.onlineCourses = this.courses.filter(u => u.course.courseMode === 'Online' || u.course.courseMode === 'ONLINE');
    });
  }

  ngOnDestroy() {
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
}

  ngAfterViewInit() {

  }


}
