import React from "react";
import {createSelector} from "reselect";

const getUsers = (state) => state.usersPage.users;


export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

export const getUserTotalCount = (state) => {
    return state.usersPage.userTotalCount;
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};



