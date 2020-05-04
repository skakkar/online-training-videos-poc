import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-course-section',
  templateUrl: './course-section.component.html',
  styleUrls: ['./course-section.component.scss']
})
export class CourseSectionComponent implements OnInit {

  @Input() course: any;
  safeSrc: SafeResourceUrl;
  displayedColumns = ['position', 'name'];
  dataSource = [{ position: 1, name: 'Hydrogen'}];
  private youtubeUrlPrefix = '//www.youtube.com/embed/';

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
  
  }

  playContent(videoUrl: any) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix+videoUrl);
  }

}
