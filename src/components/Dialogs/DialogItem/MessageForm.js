import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/Validators/Validators";
import {Textarea} from "../../../FormControls/FormControl";

let maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Enter your message' component={Textarea} name={'newMessageBody'}
            validate={[required,maxLength50 ]}/>
            <div>
                <button>Send</button>
            </div>
        </form>)

}

export const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)



