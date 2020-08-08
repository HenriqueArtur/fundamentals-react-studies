import React from 'react'

export default props => {

    return (
        <p>
            {props.name} <strong>{props.lastName}</strong>
        </p>
    )
}