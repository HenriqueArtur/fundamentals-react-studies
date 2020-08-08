import React, { cloneElement } from 'react'

export default props => {

    return (
        <div>
            {
                // Only one element
                // React.cloneElement(props.children, {...props})

                // Multiples elements
                props.children.map( (child, i) => {
                    return cloneElement(child, {...props, key: i})
                })
            }
        </div>
    )
}