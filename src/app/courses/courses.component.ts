import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Course } from '../shared/course/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  orderBy = false;
  filterCourseStr: string;
  start = 0;
  count = 10;

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.courseService
      .getList(this.start, this.count)
      .subscribe((list: any) => (this.courses = list));
  }

  loadMore() {
    this.courseService
      .getList(++this.start, this.count)
      .subscribe((list: any) => (this.courses = this.courses.concat(list)));
  }

  onCourseDelete(id) {
    const confirmDelete = window.confirm(
      'Do you really want to delete the course?'
    );
    if (confirmDelete) {
      this.courseService.removeItem(id).subscribe(() => {
        this.start = 0;
        this.courseService
          .getList(this.start, this.count)
          .subscribe((list: Course[]) => (this.courses = list));
      });
    }
  }
  toggleOrderBy() {
    this.orderBy = !this.orderBy;
  }
  findCourse(inputStr: string) {
    this.filterCourseStr = inputStr;
  }

  onAddCourse() {
    this.router.navigate(['courses/new']);
  }
}
