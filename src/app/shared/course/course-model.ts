import { Course } from './course';

export class CourseModel implements Course {
  id: string;
  name: string;
  createdDate: string;
  length: string;
  description: string;
  isTopRated: boolean;
}
