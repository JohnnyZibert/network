import {profileAPI, usersAPI} from "../api/api";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const DELETE_PROFILE_POST = 'DELETE_PROFILE_POST'


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}

    ],
    profile: ' ',
    status:'',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: action.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],

            }
        }
        case DELETE_PROFILE_POST: {

            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)

            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}


export const addPostAC = (newPostText) => ({type: ADD_POST,newPostText});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_PROFILE_POST, postId})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));

    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
        dispatch(setStatus(response.data));

    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }

    })
}

export default profileReducer;