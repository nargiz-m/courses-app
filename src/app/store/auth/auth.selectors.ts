import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authFeatureKey, AuthState } from "./auth.reducer";

const getAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const isAuthorizedSelector = createSelector(
    getAuthState,
    (state: AuthState) => state.isAuthorized
);

export const getErrorMessage = createSelector(
    getAuthState,
    (state: AuthState) => state.errorMessage
);