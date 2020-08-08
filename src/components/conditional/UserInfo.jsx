import React from 'react'
import If, { Else } from './If'

export default props => {
    const user = props.user || {}
    return (
        <p>
            {/* IF */}
            {/* <If test={user && user.name}>
                You Welcome <strong>{user.name}</strong>!
            </If>
            <If test={!user || !user.name}>
                You Welcome <strong>Anonym</strong>!
            </If> */}

            {/* IF/ELSE */}
            <If test={user && user.name}>
                You Welcome <strong>{user.name}</strong>!
                <Else>
                    You Welcome <strong>Anonym</strong>!
                </Else>
            </If>
        </p>
    )
}