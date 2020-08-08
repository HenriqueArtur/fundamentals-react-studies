import React, { useState } from 'react'
import IndirectChild from './IndirectChild'

export default props => {
    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)

    function sendInfos(name, age, nerd) {
        setName(name)
        setAge(age)
        setNerd(nerd)
    }

    return (
        <div>
            <p>
                My mother is {name}, her age is {age} and {nerd ? 'her is a nerd.' : 'her isn\'t a nerd.'}
            </p>
            <IndirectChild getInfos={sendInfos} />
        </div>
    )
}