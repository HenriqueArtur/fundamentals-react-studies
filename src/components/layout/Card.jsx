import React from 'react'
import './Card.css'

export default props => {

    const cardStyle = {
        backgroundColor: props.color || 'rebeccapurple',
        borderColor: props.color || 'rebeccapurple',
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.title}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}