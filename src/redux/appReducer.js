import {getAuthDataForUser} from "./authReducer";

const INITIALISED_SUCCESS = 'INITIALISED_SUCCESS';

let initialState = {
    initialized: false,
};

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALISED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state;
    }
}

export const initialisedSuccess = () => ({type: INITIALISED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthDataForUser());
    Promise.all([promise])
        .then(() => {
            dispatch(initialisedSuccess());
        })
}
