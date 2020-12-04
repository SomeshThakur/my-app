import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course/course';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(courses: Course[]) {
    return [...courses].sort((a, b) => {
      const aTime = new Date(a.createdDate).getTime();
      const bTime = new Date(b.createdDate).getTime();
      return aTime - bTime;
    });
  }
}
