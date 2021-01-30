import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  title: string;
  desc: string;
  duration: string;
  date: string;
  authors: string;

  @Output() cancel = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onCancel() {
    this.cancel.emit(false);
  }
  add(events) {
    console.log(title, this.desc, this.date, this.authors);
  }
}
