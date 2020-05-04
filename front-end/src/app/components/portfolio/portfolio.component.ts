import { Component, OnInit, Input,Optional } from '@angular/core';
import { trigger, transition, animate, style, stagger, animateChild, query } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

import {Router, NavigationExtras} from '@angular/router';
import { MyCourseInfoComponent } from '../my-course-info/my-course-info.component';
import { overlayConfigFactory } from 'ngx-modialog';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
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
export class PortfolioComponent implements OnInit {
  types: string[];
  @Input() courses: any[];

  constructor(
              private route: ActivatedRoute,
              @Optional() private modal: Modal,
              public router: Router) { }


  ngOnInit() {

  }

  viewDetails(id:any, videoUrl:any) {
    let navigationExtras: NavigationExtras = {
            queryParams: {
                "videoUrl": videoUrl,
                "courseId": id,
            }
    };
    this.router.navigate(['my-course-info'], navigationExtras);
  }

}
