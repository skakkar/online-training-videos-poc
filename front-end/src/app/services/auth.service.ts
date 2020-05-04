import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import {Student} from '../model/model.student';
import {AppComponent} from '../core/app.component';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  private router: Router;
  constructor(public http: HttpClient) { }
  public errorMessage = '';
  authenticated = false;
  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get(AppComponent.API_URL + '/account/login', {headers: headers})
    .subscribe((response) => {
        let data: any ;
        data = response;
        const u = data.principal;
        if (response['fullName']) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        return callback && callback(data);
    }, err => {
      return callback(null);
    });

}
  public logIn(user: Student) {
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    // creating base64 encoded String from user name and password
    const base64Credential: string = btoa( user.username + ':' + user.password);
    localStorage.setItem('headers', JSON.stringify(headers));
    return this.http.get(AppComponent.API_URL + '/account/login', {headers: headers});
  }

}
