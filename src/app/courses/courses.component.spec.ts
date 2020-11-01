import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have intial courses array', () => {
    component.ngOnInit();
    expect(component.courses).toBeTruthy();
  });

  it('should log the dummy implementation of load more', () => {
    const spy = spyOn(console, 'log');
    component.loadMore();
    expect(spy).toHaveBeenCalled();
  });

  it('should log the dummy implementation of delete course', () => {
    const spy = spyOn(console, 'log');
    component.onCourseDelete('123');
    expect(spy).toHaveBeenCalled();
  });
});
