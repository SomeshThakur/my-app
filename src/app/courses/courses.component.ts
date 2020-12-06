import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../shared/course/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  orderBy = false;
  filterCourseStr: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getList();
  }

  loadMore() {
    console.log('Load More');
  }

  onCourseDelete(id) {
    const confirmDelete = window.confirm(
      'Do you really want to delete the course?'
    );
    if (confirmDelete) {
      this.courseService.removeItem(id);
    }
  }
  toggleOrderBy() {
    this.orderBy = !this.orderBy;
  }
  findCourse(inputStr: string) {
    this.filterCourseStr = inputStr;
  }
}
