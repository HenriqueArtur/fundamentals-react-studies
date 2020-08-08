import React from 'react'

export default props => {
    const { floor, roof } = props
    return (
        <>
            <h2>Random Number</h2>
            <p><strong>Min: </strong>{ floor } | <strong>Max: </strong>{ roof }</p>
            <p></p>
            <p>The random number is <strong>{ randomInt(floor, roof) }</strong></p>
        </>
    )
}

function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random())
}

function randomFloat(min, max) {
    return min + (max - min) * Math.random()
}