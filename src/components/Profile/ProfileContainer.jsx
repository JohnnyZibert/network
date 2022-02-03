import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPostAC, getUsersProfile, updateNewPostTextAC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";



class ContainerProfile extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.getUsersProfile(userId);

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} contacts={this.props.contacts}/>

        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

})

let withUrlComponentContainer = withRouter(ContainerProfile)
export default connect(mapStateToProps, {addPostAC,getUsersProfile, updateNewPostTextAC,})(withUrlComponentContainer);

