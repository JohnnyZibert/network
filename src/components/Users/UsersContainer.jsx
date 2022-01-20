import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";


let mapDispatchToProps=(dispatch) => {


    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))

        }
    }
}

    let mapStateToProps = (state) => {
        return {
           users: state.usersPage.users
        }
    }


export default connect(mapStateToProps,mapDispatchToProps)(Users);
