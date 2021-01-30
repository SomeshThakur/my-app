import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Course } from '../shared/course/course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  title: string;
  desc: string;
  duration: string;
  date: any;
  authors: string;
  isEditView: boolean;
  id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.isEditView = !!params.id;
      this.setCourseDetails(this.courseService.getItemById(params.id));
    });
  }

  setCourseDetails(course: Course) {
    this.title = course.title;
    this.desc = course.description;
    this.duration = course.duration;
    this.date = new Date(course.createdDate);
    this.authors = course.authors;
    this.id = course.id;
  }

  onCancel() {
    this.router.navigate(['courses']);
  }

  add() {
    const course: Course = {
      id: this.id,
      title: this.title,
      createdDate: this.date,
      duration: this.duration,
      description: this.desc,
      topRated: false,
      authors: this.authors,
    };
    if (this.isEditView) {
      this.courseService.updateItem(this.id, course);
    } else {
      this.courseService.createCourse(
        course.title,
        course.createdDate,
        course.duration,
        course.description,
        course.topRated,
        course.authors
      );
    }
    this.router.navigate(['courses']);
  }
}
