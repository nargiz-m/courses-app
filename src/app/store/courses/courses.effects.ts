import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses.service';
import { requestAllCourses, requestAllCoursesFail, requestAllCoursesSuccess, requestCreateCourse, requestCreateCourseFail, requestCreateCourseSuccess, requestDeleteCourse, requestDeleteCourseFail, requestDeleteCourseSuccess, requestEditCourse, requestEditCourseFail, requestEditCourseSuccess, requestFilteredCourses, requestFilteredCoursesFail, requestFilteredCoursesSuccess, requestSingleCourse, requestSingleCourseFail, requestSingleCourseSuccess } from './courses.actions';

@Injectable()
export class CoursesEffects {
    getAll$ = createEffect(() => this.actions$.pipe(
        ofType(requestAllCourses),  
        mergeMap(() => this.coursesService.getAll().pipe(
            map(courses => (requestAllCoursesSuccess({courses}))),
            catchError(error => of(requestAllCoursesFail(error)))
        ))
    ))

    filteredCourses$ = createEffect(() => this.actions$.pipe(
        ofType(requestFilteredCourses),  
        mergeMap((action) => this.coursesService.searchCourses(action.searchValue).pipe(
            map(courses => (requestFilteredCoursesSuccess({courses}))),
            catchError(error => of(requestFilteredCoursesFail(error)))
        ))
    ))

    getSpecificCourse$ = createEffect(() => this.actions$.pipe(
        ofType(requestSingleCourse),  
        mergeMap((action) => this.coursesService.getCourse(action.id).pipe(
            map(course => (requestSingleCourseSuccess({course}))),
            catchError(error => of(requestSingleCourseFail(error)))
        ))
    ))

    deleteCourse$ = createEffect(() => this.actions$.pipe(
        ofType(requestDeleteCourse),  
        mergeMap((action) => this.coursesService.deleteCourse(action.id).pipe(
            map(course => (requestDeleteCourseSuccess({course}))),
            catchError(error => of(requestDeleteCourseFail(error)))
        ))
    ))

    editCourse$ = createEffect(() => this.actions$.pipe(
        ofType(requestEditCourse),  
        mergeMap((action) => this.coursesService.editCourse(action.id, action.body).pipe(
            map(course => (requestEditCourseSuccess({course}))),
            catchError(error => of(requestEditCourseFail(error)))
        ))
    ))

    createCourse$ = createEffect(() => this.actions$.pipe(
        ofType(requestCreateCourse),  
        mergeMap((action) => this.coursesService.createCourse(action.body).pipe(
            map(course => (requestCreateCourseSuccess({course}))),
            catchError(error => of(requestCreateCourseFail(error)))
        ))
    ))

    redirectToTheCoursesPage$ = createEffect(() => this.actions$.pipe(
        ofType(requestCreateCourseSuccess, requestEditCourseSuccess, requestSingleCourseFail),  
        tap(() => {
            this.router.navigate(['/'])
        })),
        { dispatch: false }
    )

    constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
        private router: Router
    ) {}
}