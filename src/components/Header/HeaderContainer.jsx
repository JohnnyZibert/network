import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthDataForUser} from "../../redux/authReducer";



class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.getAuthDataForUser();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {getAuthDataForUser})(HeaderContainer);