import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course/course';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(courses: Course[], filterStr: string) {
    return courses.filter((course) =>
      course.name.toLowerCase().includes(filterStr.toLowerCase())
    );
  }
}
