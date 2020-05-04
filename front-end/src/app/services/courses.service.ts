import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Student} from '../model/model.student';
import { Observable } from 'rxjs';
import {UserCourse} from '../model/model.usercourse';
import {Http} from '@angular/http';
import {AppComponent} from '../core/app.component';

@Injectable()
export class CoursesService {
  constructor(public http: HttpClient) { }

  getUserCourses(user: Student) {
    return this.http.post(AppComponent.API_URL + '/account/register', user);
  }

  getAllCoursesList(): Observable<any> {
    return this.http.get(AppComponent.API_URL + '/course/courses');
  }

  getCourseByCourseId(couserId: any): Observable<any> {
    return this.http.get(AppComponent.API_URL + '/course/courseInfo/'+ couserId);
  }

  enrollToCourse(id: any, courseId: number) : Observable<any> {
    let u = {
      "id":id,
      "couserId":courseId,
    };
    return this.http.post(AppComponent.API_URL + '/course/enroll', u);
  }

  getCourses(id: number) : Observable<any> {
    return this.http.get(AppComponent.API_URL + '/course/getUserInfo/'+ id);
  }

  registerCourse(course: any) : Observable<any> {
    return this.http.post(AppComponent.API_URL + '/course/register', course);
  }

  regiserCourseSection(course: any) : Observable<any> {
    return this.http.post(AppComponent.API_URL + '/course/registerCourseSection', course);
  }

  regiserCourseContent(course: any) : Observable<any> {
    return this.http.post(AppComponent.API_URL + '/course/registerCourseContent', course);
  }

}
