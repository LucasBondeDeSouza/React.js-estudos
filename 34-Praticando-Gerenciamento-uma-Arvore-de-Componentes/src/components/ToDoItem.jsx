import React from "react";

export default (props) => {

    return (
        <div onClick={() => {
            props.onChecked(props.id)
        }}>
            <li>{props.text}</li>
        </div>
    )
}