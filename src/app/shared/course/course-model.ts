import { Course } from './course';

export class CourseModel implements Course {
    id: string;
    title: string;
    created_date: string;
    duration: string;
    description: string;
}
