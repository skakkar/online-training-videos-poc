import { Component, OnInit } from '@angular/core';
import {Student} from '../model/model.student';
import {Router, ActivatedRoute} from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'online-training';
  static API_URL = 'http://localhost:8080';
  currentUser: Student;
  isUserLoggedIn: boolean;
  isAdmin:boolean;

  constructor(public router: Router,
              private route:ActivatedRoute,
              private dataSharingService: DataSharingService,
              private location: Location) {
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
          this.isUserLoggedIn = value;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.isAdmin = this.currentUser && this.currentUser.role === 'ADMIN' ? true: false;
    });
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.dataSharingService.isUserLoggedIn.next(false);
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.isUserLoggedIn = value;
          this.isAdmin = this.currentUser && this.currentUser.role === 'ADMIN' ? true: false;
    });
  }

}
