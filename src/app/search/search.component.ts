import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  inputStr = '';
  @Output()
  inputChanged = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  findCourse() {
    this.inputChanged.emit(this.inputStr);
  }
}
