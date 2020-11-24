import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course/course';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(courses: Course[]) {
    return [...courses].sort((a, b) => {
      return a.createdDate.localeCompare(b.createdDate);
    });
  }
}
