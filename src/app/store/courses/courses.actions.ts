import { createAction, props } from '@ngrx/store';

export const requestAllCourses = createAction( '[Courses Page] Course');
export const requestAllCoursesSuccess = createAction( '[Courses Page] Courses Success', props<{ courses: any[] }>());
export const requestAllCoursesFail = createAction( '[Courses Page] Course Fail', props<{ error: string }>());
export const requestSingleCourse = createAction( '[Course Page] Course', props<{ id: string }>());
export const requestSingleCourseSuccess = createAction( '[Course Page] Course Success', props<{ course: any }>());
export const requestSingleCourseFail = createAction( '[Course Page] Course Fail', props<{ error: string }>());
export const requestFilteredCourses = createAction( '[Courses Page] Filtered Courses', props<{ searchValue: string }>());
export const requestFilteredCoursesSuccess = createAction( '[Courses Page] Filtered Courses Success', props<{ courses: any[] }>());
export const requestFilteredCoursesFail = createAction( '[Courses Page] Filtered Courses Fail', props<{ error: string }>());
export const requestDeleteCourse = createAction( '[Courses Page] Delete Course', props<{ id: string }>());
export const requestDeleteCourseSuccess = createAction( '[Courses Page] Delete Course Success', props<{ course: any }>());
export const requestDeleteCourseFail = createAction( '[Courses Page] Delete Course Fail', props<{ error: string }>());
export const requestEditCourse = createAction( '[Courses Page] Edit Course', props<{ id: string, body: any }>());
export const requestEditCourseSuccess = createAction( '[Courses Page] Edit Course Success', props<{ course: any }>());
export const requestEditCourseFail = createAction( '[Courses Page] Edit Course Fail', props<{ error: string }>());
export const requestCreateCourse = createAction( '[Courses Page] Create Course', props<{ body: any }>());
export const requestCreateCourseSuccess = createAction( '[Courses Page] Create Course Success', props<{ course: any }>());
export const requestCreateCourseFail = createAction( '[Courses Page] Create Course Fail', props<{ error: string }>());