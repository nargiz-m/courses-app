import { createAction, props } from '@ngrx/store';

export const requestGetUser = createAction('[User] User')
export const requestGetUserSuccess = createAction('[User] User Success', props<{user: any}>())
export const requestGetUserFail = createAction('[User] User Fail', props<{ error: string }>())
export const requestGetAuthor = createAction('[User] Author', props<{id: string}>())
export const requestGetAuthorSuccess = createAction('[User] Author Success', props<{author: any}>())
export const requestGetAuthorFail = createAction('[User] Author Fail', props<{ error: string }>())
export const requestAddAuthor = createAction('[User] Add Author', props<{body: any}>())
export const requestAddAuthorSuccess = createAction('[User] Add Author Success')
export const requestAddAuthorFail = createAction('[User] Add Author Fail', props<{ error: string }>())