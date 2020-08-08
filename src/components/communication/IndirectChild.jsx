import React from 'react'

export default props => {
    const randomAge = () => parseInt(Math.random() * 20) + 40
    const randomNerd = () => Math.random() > 0.5
    return (
        <div>
            <p>Child</p>
            <button onClick = { e => props.getInfos('Cristina', randomAge(), randomNerd()) }>
                Get Infos
            </button>
        </div>
    )
}