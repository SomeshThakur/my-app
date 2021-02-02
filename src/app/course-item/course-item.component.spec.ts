import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Course } from '../shared/course/course';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the delete event', () => {
    const course: Course = {
      id: '123',
      name: '',
      createdDate: '',
      description: '',
      length: '',
    };
    // Input value
    component.course = course;

    component.delete.subscribe((id) => {
      // Output value test
      expect(id).toEqual(course.id);
    });

    component.deleteClickHandler();
  });

  it('should log the dummy implementation of edit course', () => {
    const spy = spyOn(console, 'log');
    component.editClickHanlder();
    expect(spy).toHaveBeenCalled();
  });
});
