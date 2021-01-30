import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-app';
  isAuthenticated = false;
  isAddCourse;

  constructor(
    private authService: AuthService,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  onAddCourseView(event) {
    this.isAddCourse = event;
  }
  onAddCourseViewCancel(event) {
    this.isAddCourse = event;
  }
}
