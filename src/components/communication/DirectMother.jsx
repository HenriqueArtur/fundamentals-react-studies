import React from 'react'
import DirectChild from './DirectChild'

export default props => {
    return (
        <div>
            <DirectChild text="Child" number={21} bool={true} />
            <DirectChild text="Child" number={1} bool={true} />
            <DirectChild text="Child" number={2} bool={false} />
            <DirectChild text="Child" number={10} bool={true} />
        </div>
    )
}