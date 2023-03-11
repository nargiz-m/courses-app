import { createReducer, on, Action } from "@ngrx/store";
import * as CoursesPageActions from './courses.actions';

export const coursesFeatureKey = 'courses';

export interface CoursesState {
    allCourses: any[];
    course: any;
    isAllCoursesLoading: boolean;
    isSingleCourseLoading: boolean;
    isSearchState: boolean;
    errorMessage: string | undefined;
}

export const initialState: CoursesState = {
    allCourses: [],
    course: undefined,
    isAllCoursesLoading:  false,
    isSingleCourseLoading: false,
    isSearchState: false,
    errorMessage: undefined
}

const reduce = createReducer(initialState, 
    on(CoursesPageActions.requestAllCourses, (state) => ({
        ...state,
        isAllCoursesLoading: true,
    })),
    on(CoursesPageActions.requestAllCoursesSuccess, (state, { courses }) => ({
        ...state,
        allCourses: courses,
        isAllCoursesLoading: false,
    })),
    on(CoursesPageActions.requestAllCoursesFail, (state, { error }) => ({
        ...state,
        allCourses: [],
        errorMessage: error,
        isAllCoursesLoading: false,
    })),
    on(CoursesPageActions.requestSingleCourse, (state) => ({
        ...state,
        isSingleCourseLoading: true,
    })),
    on(CoursesPageActions.requestSingleCourseSuccess, (state, { course }) => ({
        ...state,
        course: course,
        isSingleCourseLoading: false,
    })),
    on(CoursesPageActions.requestSingleCourseFail, (state, { error }) => ({
        ...state,
        errorMessage: error,
        isSingleCourseLoading: false,
    })),
    on(CoursesPageActions.requestFilteredCourses, (state) => ({
        ...state,
        isAllCoursesLoading: true,
        isSearchState: true,
    })),
    on(CoursesPageActions.requestFilteredCoursesSuccess, (state, { courses }) => ({
        ...state,
        allCourses: courses,
        isAllCoursesLoading: false,
    })),
    on(CoursesPageActions.requestFilteredCoursesFail, (state, { error }) => ({
        ...state,
        errorMessage: error,
        isAllCoursesLoading: false,
    })),
    on(CoursesPageActions.requestDeleteCourse, (state) => ({
        ...state,
        isAllCoursesLoading: true,
    })),
    on(CoursesPageActions.requestDeleteCourseSuccess, (state) => ({
        ...state,
        isAllCoursesLoading: false,
    })),
    on(CoursesPageActions.requestDeleteCourseFail, (state, { error }) => ({
        ...state,
        errorMessage: error,
        isAllCoursesLoading: false,
    })),
    on(CoursesPageActions.requestEditCourse, (state) => ({
        ...state,
        isSingleCourseLoading: true,
    })),
    on(CoursesPageActions.requestEditCourseSuccess, (state, { course }) => ({
        ...state,
        course: course,
        isSingleCourseLoading: false,
    })),
    on(CoursesPageActions.requestEditCourseFail, (state, { error }) => ({
        ...state,
        errorMessage: error,
        isSingleCourseLoading: false,
    })),
    on(CoursesPageActions.requestCreateCourse, (state) => ({
        ...state,
        isSingleCourseLoading: true,
    })),
    on(CoursesPageActions.requestCreateCourseSuccess, (state, { course }) => ({
        ...state,
        course: course,
        isSingleCourseLoading: false,
    })),
    on(CoursesPageActions.requestCreateCourseFail, (state, { error }) => ({
        ...state,
        errorMessage: error,
        isSingleCourseLoading: false,
    })),
);

export function coursesReducer (
    state: CoursesState = initialState,
    action: Action
): CoursesState {
    return reduce(state, action);
}