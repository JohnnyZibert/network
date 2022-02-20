import {aythAPI as authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USERS = 'SET_AUTH_USERS';

let initialState = {
    userId: null,
    email: null,
    login: 'free',
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USERS: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) =>
    ({
        type: SET_AUTH_USERS, payload:
            {userId, email, login, isAuth}
    });

export const getAuthDataForUser = () => (dispatch) => {
   return authAPI.me().then(response => {
        if (response.resultCode === 0) {
            let {id, email, login} = response.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });

}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthDataForUser());
        } else {
            let message = response.data.messages.length>0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login",{_error: message}));

        }
    });

}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });

}


export default authReducer;