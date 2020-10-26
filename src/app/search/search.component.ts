import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  inputStr = '';
  constructor() {}

  ngOnInit(): void {}

  findCourse() {
    console.log(this.inputStr);
  }
}
