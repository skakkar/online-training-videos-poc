import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Student} from '../../model/model.student';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  currentUser: Student;
  isEnrolled;
  
  constructor(public authService: AuthService,
              public router: Router,
              private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.isEnrolled = this.route.snapshot.queryParamMap.get('isEnrolled');
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home']);
  }

  courses() {
    this.router.navigateByUrl('/my-courses');
  }

  allCourses() {
    this.router.navigateByUrl('/courses');
  }
}
