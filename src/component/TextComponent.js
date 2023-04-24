import React from "react";
export default function TextComponent(props)
{
    return(
        <div>
            {props.firstName}
            {props.lastName}is of age{props.age}
        </div>
    )
}