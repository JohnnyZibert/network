import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {addPostAC, setUserProfile, updateNewPostTextAC} from "../../redux/profile-reducer";

class ContainerProfile extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);

            })
    }

    render()
        {
        return (
            <Profile {...this.props} profile={this.props.profile} contacts={this.props.contacts}/>

        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

})
export default connect(mapStateToProps, {setUserProfile,addPostAC,updateNewPostTextAC,})(ContainerProfile);

