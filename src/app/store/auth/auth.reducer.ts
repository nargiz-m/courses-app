import { createReducer, on, Action } from "@ngrx/store";
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
    isAuthorized: boolean;
    errorMessage: string | undefined;
}

export const initialState: AuthState = {
    isAuthorized: sessionStorage.getItem('token') != undefined,
    errorMessage: undefined
}

const reduce = createReducer(initialState, 
    on(AuthActions.requestLogin, (state) => ({
        ...state,
    })),
    on(AuthActions.requestLoginSuccess, (state) => ({
        ...state,
        isAuthorized: true,
    })),
    on(AuthActions.requestLoginFail, (state, { error }) => ({
        ...state,
        errorMessage: error,
    })),
    on(AuthActions.requestRegister, (state) => ({
        ...state,
    })),
    on(AuthActions.requestRegisterSuccess, (state) => ({
        ...state,
    })),
    on(AuthActions.requestRegisterFail, (state, { error }) => ({
        ...state,
        errorMessage: error,
    })),
    on(AuthActions.requestLogout, (state) => ({
        ...state,
    })),
    on(AuthActions.requestLogoutSuccess, (state) => ({
        ...state,
        isAuthorized: false
    })),
    on(AuthActions.requestLogoutFail, (state, { error }) => ({
        ...state,
        errorMessage: error,
    })),
);

export function authReducer (
    state: AuthState = initialState,
    action: Action
): AuthState {
    return reduce(state, action);
}