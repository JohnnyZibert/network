import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/Validators/Validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Input} from "../../FormControls/FormControl";
import {login} from "../../redux/authReducer";
import style from "../../FormControls/FormContol.Modul.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm =  reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);