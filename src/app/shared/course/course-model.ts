import { Course } from './course';

export class CourseModel implements Course {
  id: string;
  title: string;
  createdDate: string;
  duration: string;
  description: string;
  topRated: boolean;
}
