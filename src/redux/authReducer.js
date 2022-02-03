import {aythAPI as authAPI} from "../api/api";

const SET_AUTH_USERS = 'SET_AUTH_USERS';

let initialState = {
    userId: null,
    email: null,
    login: 'free',
    isAuth:false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USERS: {
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        }
        default:
            return state;
    }
}


export const  setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USERS, data: userId, email, login})

export const getAuthDataForUser = ()=> (dispatch) =>{
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });

}



export default authReducer;