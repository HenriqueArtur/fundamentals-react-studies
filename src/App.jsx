import React from 'react'
import './App.css'

import Card from './components/layout/Card'

import Megasena from './components/megasena/Megasena'
import Counter from './components/counter/Counter'
import Input from './components/form/Input'
import IndirectMother from './components/communication/IndirectMother'
import DirectMother from './components/communication/DirectMother'
import UserInfo from './components/conditional/UserInfo'
import EvenOrOdd from './components/conditional/EvenOrOdd'
import ProductsTable from './components/repeat/ProductsTable'
import StudentList from './components/repeat/StudentsList'
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
            <Card title="#13 - Mega-Sena Challend" color="#ff2975">
                <Megasena qtd={7} />
            </Card>

            <Card title="#12 - Counter" color="#ff901f">
                <Counter initialNumber={10} />
            </Card>

            <Card title="#11 - Component Controlled (Input)" color="#ffd319">
                <Input />
            </Card>

            <Card title="#10 - Indirect Communication" color="#8c1eff">
                <IndirectMother />
            </Card>

            <Card title="#09 - Direct Communication" color="#f222ff">
                <DirectMother />
            </Card>

            <Card title="#08 - Conditional Rendering" color="#ff2975">
                <EvenOrOdd number={21} />
                <UserInfo user={{name: 'Artur'}} />
                <UserInfo user={{email: 'artur@gmail.com'}} />
            </Card>

            <Card title="#07 - Repeat Challenge" color="#ff901f">
                <ProductsTable />
            </Card>

            <Card title="#06 - Repeat" color="#ffd319">
                <StudentList />
            </Card>

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
