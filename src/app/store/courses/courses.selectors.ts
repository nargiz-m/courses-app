import { createFeatureSelector, createSelector } from "@ngrx/store";
import { coursesFeatureKey, CoursesState } from "./courses.reducers"

const getCourseState = createFeatureSelector<CoursesState>(coursesFeatureKey);

export const isAllCoursesLoadingSelector = createSelector(
    getCourseState,
    (state: CoursesState) => state.isAllCoursesLoading
);

export const isSearchingStateSelector = createSelector(
    getCourseState,
    (state: CoursesState) => state.isSearchState
);

export const isSingleCourseLoadingSelector = createSelector(
    getCourseState,
    (state: CoursesState) => state.isSingleCourseLoading
);

export const getCourses = createSelector(
    getCourseState,
    (state: CoursesState) => state.allCourses
);

export const getAllCourses = createSelector(
    getCourseState,
    (state: CoursesState) => state.allCourses
);

export const getCourse = createSelector(
    getCourseState,
    (state: CoursesState) => state.course
);

export const getErrorMessage = createSelector(
    getCourseState,
    (state: CoursesState) => state.errorMessage
);
