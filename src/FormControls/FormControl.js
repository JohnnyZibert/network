import React from 'react'
import style from "./FormContol.Modul.css"
import {fieldMetaPropTypes as meta} from "redux-form";

const hasError = meta.touched && meta.error;

export const FormControl = ({input, meta, ...props}) => {
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}

export const Textarea = (props) => {
    const {input, meta,children, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta,children, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}