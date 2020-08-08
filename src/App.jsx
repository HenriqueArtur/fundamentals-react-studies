import React from 'react'

import First from './components/basics/First'
import WithParams from './components/basics/WithParams'
import Fragment from './components/basics/Fragment'

export default _ =>
    <div id="app">
        <h1>Fundamentals React</h1>
        <Fragment />
        <WithParams title="Second Componet" subtitle="Nice!" />
        <First></First>
    </div>
