import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {StudentCourseInfo} from '../model/model.studentcourseinfo';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';
import {AppComponent} from '../core/app.component';

@Injectable()
export class AccountService {
  constructor(public http: HttpClient) { }

  createAccount(user: StudentCourseInfo) {
    return this.http.post(AppComponent.API_URL + '/account/register', user);
  }

  getStudentCourses(id: number) : Observable<any> {
    return this.http.get(AppComponent.API_URL + '/account/getStudentInfo/'+ id);
  }


}
