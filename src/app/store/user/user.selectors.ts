import { createFeatureSelector, createSelector } from "@ngrx/store";
import { usersFeatureKey, UsersState } from "./user.reducer";

const getUserState = createFeatureSelector<UsersState>(usersFeatureKey);

export const getName = createSelector(
    getUserState,
    (state: UsersState) => state.name
)

export const isAdminSelector = createSelector(
    getUserState,
    (state: UsersState) => state.isAdmin
)

export const getAuthor = createSelector(
    getUserState,
    (state: UsersState) => state.author
)

export const getErrorMessage = createSelector(
    getUserState,
    (state: UsersState) => state.errorMessage
);