import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import authReducer from "./authReducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk';



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,


});

export const  store = createStore(reducers,applyMiddleware(thunkMiddleware));


