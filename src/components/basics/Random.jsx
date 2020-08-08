import React from 'react'

export default props => {
    var floor = props.floor
    var roof = props.roof
    return (
        <>
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