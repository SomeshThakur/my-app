import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Course } from '../shared/course/course';

// TODO: Remove all console.logs

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  courses: Course[];

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.courses = [
      {
        id: '1',
        title: 'Course title',
        duration: 'duration',
        createdDate: 'created date',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies facilisis lorem, pulvinar sollicitudin ligula aliquam non. Pellentesque ante ligula, mollis et tellus in, accumsan faucibus mi. Integer et neque non lorem bibendum tempus et sed lectus. Ut dapibus congue odio at placerat. Ut tristique fringilla eros, fermentum faucibus est maximus eget. Fusce et porttitor eros. Mauris ornare sagittis pretium. Vivamus egestas nisi eget nulla ultrices, et rutrum arcu venenatis.',
      },
      {
        id: '2',
        title: 'Course title',
        duration: 'duration',
        createdDate: 'created date',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies facilisis lorem, pulvinar sollicitudin ligula aliquam non. Pellentesque ante ligula, mollis et tellus in, accumsan faucibus mi. Integer et neque non lorem bibendum tempus et sed lectus. Ut dapibus congue odio at placerat. Ut tristique fringilla eros, fermentum faucibus est maximus eget. Fusce et porttitor eros. Mauris ornare sagittis pretium. Vivamus egestas nisi eget nulla ultrices, et rutrum arcu venenatis.',
      },
      {
        id: '3',
        title: 'Course title',
        duration: 'duration',
        createdDate: 'created date',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies facilisis lorem, pulvinar sollicitudin ligula aliquam non. Pellentesque ante ligula, mollis et tellus in, accumsan faucibus mi. Integer et neque non lorem bibendum tempus et sed lectus. Ut dapibus congue odio at placerat. Ut tristique fringilla eros, fermentum faucibus est maximus eget. Fusce et porttitor eros. Mauris ornare sagittis pretium. Vivamus egestas nisi eget nulla ultrices, et rutrum arcu venenatis.',
      },
      {
        id: '4',
        title: 'Course title',
        duration: 'duration',
        createdDate: 'created date',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies facilisis lorem, pulvinar sollicitudin ligula aliquam non. Pellentesque ante ligula, mollis et tellus in, accumsan faucibus mi. Integer et neque non lorem bibendum tempus et sed lectus. Ut dapibus congue odio at placerat. Ut tristique fringilla eros, fermentum faucibus est maximus eget. Fusce et porttitor eros. Mauris ornare sagittis pretium. Vivamus egestas nisi eget nulla ultrices, et rutrum arcu venenatis.',
      },
      {
        id: '5',
        title: 'Course title',
        duration: 'duration',
        createdDate: 'created date',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies facilisis lorem, pulvinar sollicitudin ligula aliquam non. Pellentesque ante ligula, mollis et tellus in, accumsan faucibus mi. Integer et neque non lorem bibendum tempus et sed lectus. Ut dapibus congue odio at placerat. Ut tristique fringilla eros, fermentum faucibus est maximus eget. Fusce et porttitor eros. Mauris ornare sagittis pretium. Vivamus egestas nisi eget nulla ultrices, et rutrum arcu venenatis.',
      },
    ];
  }

  ngOnChanges() {
    console.log(`ngOnChanges`);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  loadMore() {
    console.log('Load More');
  }
  onCourseDelete(id) {
    console.log('Delete click at course id : ', id);
  }
}
