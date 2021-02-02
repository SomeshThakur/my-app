import { HttpClient } from '@angular/common/http';
import {
  AfterContentChecked,
  AfterViewChecked,
  ChangeDetectorRef,
  Injectable,
  Input,
  Optional,
} from '@angular/core';
import { Author } from '../shared/course/author';
import { Course } from '../shared/course/course';
import { AuthService } from './auth.service';
import { BASE } from './utils';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses: Course[] = [];
  id: number;

  constructor(private http: HttpClient, private auth: AuthService) {
    const freshCourse = new Date();
    freshCourse.setDate(freshCourse.getDate() - 10);
    const upComingCourse = new Date();
    upComingCourse.setDate(upComingCourse.getDate() + 10);
  }
  getList(start, count) {
    return this.http.get(`${BASE}/courses?start=${start}&count=${count}`, {
      headers: { Authorization: this.auth.getToken() },
    });
  }

  createCourse(
    name: string,
    createdDate: string,
    duration: string,
    description: string,
    topRated: boolean,
    authors: Author[]
  ) {
    this.courses.push({
      id: String(this.id),
      name,
      createdDate,
      length: duration,
      description,
      isTopRated: topRated,
      authors,
    });
  }
  getItemById(id) {
    return this.http.get(`${BASE}/courses/${id}`, {
      headers: { Authorization: this.auth.getToken() },
    });
  }
  updateItem(id, course: Course) {
    const index = this.courses.findIndex((course) => course.id === id);
    if (index > -1) {
      this.courses.splice(index, 1, course);
    }
  }
  removeItem(id) {
    return this.http.delete(`${BASE}/courses/${id}`, {
      headers: { Authorization: this.auth.getToken() },
    });
  }
}
