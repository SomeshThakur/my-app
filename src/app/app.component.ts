import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
    if (!this.isAuthenticated) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['courses']);
    }
  }

  onAddCourseView(event) {
    this.isAddCourse = event;
  }

  onAddCourseViewCancel(event) {
    this.isAddCourse = event;
  }
}
