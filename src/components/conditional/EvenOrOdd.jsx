import React from 'react'

export default props => {
    const isEven = props.number % 2 === 0
    return (
        <div>
            <p>The number <strong>{props.number}</strong> is <strong>{ isEven ? <span>Even</span> : <span>Odd</span> }</strong></p>
        </div>
    )
}