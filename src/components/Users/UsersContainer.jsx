import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage, setUsers,
    toggleInFollowingProcessing, toggleIsFetching, unfollow,
}
    from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/preloader";
import {usersAPI} from "../../api/api";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);


        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false);
        })
    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users userTotalCount={this.props.userTotalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}

            />
        </>

    }


}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        userTotalCount: state.usersPage.userTotalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,


    }
}


export default compose(WithAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleInFollowingProcessing, getUsers, setUsers, toggleIsFetching
    }))(UsersContainer);