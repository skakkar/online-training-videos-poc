import {ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import {CoursesService} from '../../services/courses.service';
import {Student} from '../../model/model.student';


//import { DialogRef, ModalComponent, CloseGuard } from 'ngx-modialog';
//import { BSModalContext, bootstrap4Mode } from 'ngx-modialog/plugins/bootstrap';
//bootstrap4Mode();

@Component({
  selector: 'app-my-course-info',
  templateUrl: './my-course-info.component.html',
  styleUrls: ['./my-course-info.component.css']
})
export class MyCourseInfoComponent implements OnInit {
    videoId: SafeResourceUrl;
    courseId;
    videoUrl;
    course;
    private youtubeUrlPrefix = '//www.youtube.com/embed/';
    constructor(private sanitizer: DomSanitizer,
                private route: ActivatedRoute,
                private coursesService: CoursesService,
                public router: Router) { }

    ngOnInit() {
      this.videoUrl = this.route.snapshot.queryParamMap.get('videoUrl');
      this.courseId = this.route.snapshot.queryParamMap.get('courseId');
      this.coursesService.getCourseByCourseId(this.courseId).subscribe(course => {
            this.course=course;
      });
      ///this.videoId = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix + this.dialog.context.videoId);
    }



}
