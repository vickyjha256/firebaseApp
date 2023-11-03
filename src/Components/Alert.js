import React from 'react'

const Alert = (props) => {
    const capitalise = (word) => {
        if (word === "danger") {
            word = "Error";
        } else if (word === "info") {
            word = "";
        }

        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <>
            {props.alert && <div className={`alert alert-${props.alert.type} fixed-top alert-dismissible`} role="alert">
                <b>{capitalise(props.alert.type)}</b>: {props.alert.text}
            </div>
            }
        </>
    )
}

export default Alert