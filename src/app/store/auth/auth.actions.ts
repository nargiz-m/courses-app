import { createAction, props } from '@ngrx/store';

export const requestLogin = createAction('[Auth] Login', props<{ body: any }>())
export const requestLoginSuccess = createAction('[Auth] Login Success')
export const requestLoginFail = createAction('[Auth] Login Fail', props<{ error: string }>())
export const requestRegister = createAction('[Auth] Register', props<{ body: any }>())
export const requestRegisterSuccess = createAction('[Auth] Register Success')
export const requestRegisterFail = createAction('[Auth] Register Fail', props<{ error: string }>())
export const requestLogout = createAction('[Auth] Logout')
export const requestLogoutSuccess = createAction('[Auth] Logout Success')
export const requestLogoutFail = createAction('[Auth] Logout Fail', props<{ error: string }>())