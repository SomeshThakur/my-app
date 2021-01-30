import {
  AfterContentChecked,
  AfterViewChecked,
  ChangeDetectorRef,
  Injectable,
  Input,
  Optional,
} from '@angular/core';
import { Course } from '../shared/course/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses: Course[];
  id: number;

  private isAddCourse: boolean = false;

  constructor() {
    const freshCourse = new Date();
    freshCourse.setDate(freshCourse.getDate() - 10);
    const upComingCourse = new Date();
    upComingCourse.setDate(upComingCourse.getDate() + 10);
    this.courses = [
      {
        id: '1',
        title: 'Angular Course',
        duration: '45',
        createdDate: freshCourse.toDateString(),
        topRated: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies facilisis lorem, pulvinar sollicitudin ligula aliquam non. Pellentesque ante ligula, mollis et tellus in, accumsan faucibus mi. Integer et neque non lorem bibendum tempus et sed lectus. Ut dapibus congue odio at placerat. Ut tristique fringilla eros, fermentum faucibus est maximus eget. Fusce et porttitor eros. Mauris ornare sagittis pretium. Vivamus egestas nisi eget nulla ultrices, et rutrum arcu venenatis.',
      },
      {
        id: '2',
        title: 'React Course',
        duration: '60',
        createdDate: new Date(2020, 0, 10).toDateString(),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies facilisis lorem, pulvinar sollicitudin ligula aliquam non. Pellentesque ante ligula, mollis et tellus in, accumsan faucibus mi. Integer et neque non lorem bibendum tempus et sed lectus. Ut dapibus congue odio at placerat. Ut tristique fringilla eros, fermentum faucibus est maximus eget. Fusce et porttitor eros. Mauris ornare sagittis pretium. Vivamus egestas nisi eget nulla ultrices, et rutrum arcu venenatis.',
      },
      {
        id: '3',
        title: 'Android Course',
        duration: '120',
        createdDate: upComingCourse.toDateString(),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies facilisis lorem, pulvinar sollicitudin ligula aliquam non. Pellentesque ante ligula, mollis et tellus in, accumsan faucibus mi. Integer et neque non lorem bibendum tempus et sed lectus. Ut dapibus congue odio at placerat. Ut tristique fringilla eros, fermentum faucibus est maximus eget. Fusce et porttitor eros. Mauris ornare sagittis pretium. Vivamus egestas nisi eget nulla ultrices, et rutrum arcu venenatis.',
      },
      {
        id: '4',
        title: 'IOS Course',
        duration: '150',
        createdDate: new Date(2019, 12, 30).toDateString(),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies facilisis lorem, pulvinar sollicitudin ligula aliquam non. Pellentesque ante ligula, mollis et tellus in, accumsan faucibus mi. Integer et neque non lorem bibendum tempus et sed lectus. Ut dapibus congue odio at placerat. Ut tristique fringilla eros, fermentum faucibus est maximus eget. Fusce et porttitor eros. Mauris ornare sagittis pretium. Vivamus egestas nisi eget nulla ultrices, et rutrum arcu venenatis.',
      },
      {
        id: '5',
        title: 'Web Basics Course',
        duration: '20',
        createdDate: new Date(2020, 4, 25).toDateString(),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies facilisis lorem, pulvinar sollicitudin ligula aliquam non. Pellentesque ante ligula, mollis et tellus in, accumsan faucibus mi. Integer et neque non lorem bibendum tempus et sed lectus. Ut dapibus congue odio at placerat. Ut tristique fringilla eros, fermentum faucibus est maximus eget. Fusce et porttitor eros. Mauris ornare sagittis pretium. Vivamus egestas nisi eget nulla ultrices, et rutrum arcu venenatis.',
      },
    ];
  }
  getList() {
    return this.courses;
  }
  createCourse(
    title: string,
    createdDate: string,
    duration: string,
    description: string,
    topRated: boolean
  ) {
    this.courses.push({
      id: String(this.id),
      title,
      createdDate,
      duration,
      description,
      topRated,
    });
  }
  getItemById(id) {
    return this.courses.find((course) => course.id === id);
  }
  updateItem(id, course: Course) {
    const index = this.courses.findIndex((course) => course.id === id);
    if (index > -1) {
      this.courses.splice(index, 1, course);
    }
  }
  removeItem(id) {
    const index = this.courses.findIndex((course) => course.id === id);
    if (index > -1) {
      this.courses.splice(index, 1);
    }
  }

  isAddCourseView() {
    return this.isAddCourse;
  }

  setCourseView(status: boolean) {
    this.isAddCourse = status;
  }
}
