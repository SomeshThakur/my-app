import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../shared/course/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Output() delete = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  deleteClickHandler() {
    this.delete.emit(this.course.id);
  }

  editClickHanlder() {
    console.log('edit');
  }
}
