import React from 'react';
import './Input.css';

const Input = ({label = "default", type = "default", name = "default", clase = "null", placeholder = "default", value = ""}) => {
    if(type === "textarea"){
        return(
            <>
            <label>{label}</label><textarea name={name} class={clase}></textarea>
            </>
        )
    }
    return(
        <>
        <label>{label}</label><input type= {type} name={name} class={clase} placeholder={placeholder} value={value}></input>
        </>
    )
}
export default Input;