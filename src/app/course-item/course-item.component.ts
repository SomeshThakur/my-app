import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../shared/course/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Output() delete = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  deleteClickHandler() {
    this.delete.emit(this.course.id);
  }

  editClickHanlder() {
    this.router.navigate(['courses/', this.course.id]);
  }
}
