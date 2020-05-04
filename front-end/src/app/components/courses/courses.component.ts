import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs';
import {Router, NavigationExtras} from '@angular/router';
import { trigger, transition, animate, style, stagger, animateChild, query } from '@angular/animations';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('@items', stagger(60, animateChild()))
      ])
    ]),
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('0.350s cubic-bezier(.8,-0.6,0.2,1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class CoursesComponent implements OnInit {

  courses: Observable<any[]>;
  currentUser;
  isEnrolled;

  constructor(private coursesService: CoursesService, public router: Router) { }

  ngOnInit() {
    this.coursesService.getAllCoursesList().subscribe(courseVals => {
          this.courses = courseVals;
    });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  enroll(id:any, name:any) {
    if(!this.currentUser) {
      let navigationExtras: NavigationExtras = {
              queryParams: {
                  "course": id
              }
          };
      this.router.navigate(['enroll'], navigationExtras);
    }else {
        this.coursesService.enrollToCourse(this.currentUser.id, id).subscribe(msg => {
                this.isEnrolled = true;
        });
    }
  }
  viewCourse(id:any, name:any) {
    let navigationExtras: NavigationExtras = {
            queryParams: {
                "course": id
            }
    };
    this.router.navigate(['view'], navigationExtras);
  }
}
