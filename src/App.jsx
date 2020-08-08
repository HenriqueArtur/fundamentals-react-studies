import React from 'react'
import './App.css'

import Card from './components/layout/Card'

import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import Random from './components/basics/Random'
import Fragment from './components/basics/Fragment'
import WithParams from './components/basics/WithParams'
import First from './components/basics/First'

export default _ =>
    <div className="App">
        <h1>Fundamentals React</h1>
        <div className="Cards">
            <Card title="#05 - Family Component" color="#8c1eff">
                <Family lastName="Cordeiro">
                    <FamilyMember name="Pedro" />
                    <FamilyMember name="Ana" />
                    <FamilyMember name="Artur" />
                </Family>
            </Card>
            <Card title="#04 - Random Challenge" color="#f222ff">
                <Random floor={5} roof={11} />
            </Card>
            <Card title="#03 - Fragment" color="#ff2975">
                <Fragment />
            </Card>
            <Card title="#02 - With Params" color="#ff901f">
                <WithParams title="Second Componet" subtitle="Nice!" />
            </Card>
            <Card title="#01 - First Component" color="#ffd319">
                <First></First>
            </Card>
        </div>
    </div>
