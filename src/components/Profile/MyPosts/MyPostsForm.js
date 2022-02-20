import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/Validators/Validators";
import {Textarea} from "../../../FormControls/FormControl";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field name={'newPostText'} component={Textarea}
                               validate={[required, maxLength10]} />
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </form>
            </div>
        </form>);

}

export const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
