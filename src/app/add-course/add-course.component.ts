import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Author } from '../shared/course/author';
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
      this.courseService
        .getItemById(params.id)
        .subscribe((course: Course) => this.setCourseDetails(course));
    });
  }

  setCourseDetails(course: Course) {
    this.title = course.name;
    this.desc = course.description;
    this.duration = course.length;
    this.date = new Date(course.createdDate);
    this.authors = course.authors.reduce(
      (prev, curr) => `${prev ? prev + ',' : prev} ${curr.name}`,
      ''
    );
    this.id = course.id;
  }

  onCancel() {
    this.router.navigate(['courses']);
  }

  add() {
    const course: Course = {
      id: this.id,
      name: this.title,
      createdDate: this.date,
      length: this.duration,
      description: this.desc,
      isTopRated: false,
      authors: this.authors.split(',').map((item: any) => ({
        name: item,
        id: item.id,
      })),
    };
    if (this.isEditView) {
      this.courseService.updateItem(this.id, course);
    } else {
      this.courseService.createCourse(
        course.name,
        course.createdDate,
        course.length,
        course.description,
        course.isTopRated,
        course.authors
      );
    }
    this.router.navigate(['courses']);
  }
}
