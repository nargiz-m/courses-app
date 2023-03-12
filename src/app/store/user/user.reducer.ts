import { createReducer, on, Action } from "@ngrx/store";
import * as UserActions from './user.actions';

export const usersFeatureKey = 'users';

export interface UsersState {
    name?: string;
    isAdmin: boolean;
    author?: string;
    errorMessage: string | undefined;
}

export const initialState: UsersState = {
    name: undefined,
    isAdmin: false,
    author: undefined,
    errorMessage: undefined
}

const reduce = createReducer(initialState, 
    on(UserActions.requestGetUser, (state) => ({
        ...state,
    })),
    on(UserActions.requestGetUserSuccess, (state, { user }) => ({
        ...state,
        name: user.name,
        isAdmin: user.role === 'admin',
    })),
    on(UserActions.requestGetUserFail, (state, { error }) => ({
        ...state,
        errorMessage: error,
    })),
    on(UserActions.requestGetAuthor, (state) => ({
        ...state,
    })),
    on(UserActions.requestGetAuthorSuccess, (state, { author }) => ({
        ...state,
        author: author,
    })),
    on(UserActions.requestGetAuthorFail, (state, { error }) => ({
        ...state,
        errorMessage: error,
    })),
    on(UserActions.requestAddAuthor, (state) => ({
        ...state,
    })),
    on(UserActions.requestAddAuthorSuccess, (state, { author }) => ({
        ...state,
        author: author,
    })),
    on(UserActions.requestAddAuthorFail, (state, { error }) => ({
        ...state,
        errorMessage: error,
    })),
);

export function usersReducer (
    state: UsersState = initialState,
    action: Action
): UsersState {
    return reduce(state, action);
}