import React, {useState} from 'react'
import './Megasena.css'

export default props => {
    function addNumberToResult(min, max, array) {
        const random = min + Math.floor(((max + 1) - min) * Math.random())
        return array.includes(random) ?
            addNumberToResult(min, max, array) :
            random
    }
    
    function generateNumber(qnt) {
        const numbers = Array(qnt)
            .fill(0)
            .reduce((numb) => {
                const newNumber = addNumberToResult(1, 60, numb)
                return [...numb, newNumber]
            }, [])
            .sort((n1, n2) => n1 - n2)
    
        return numbers
    }

    const [qtd, setQtd] = useState(props.qtd || 6)
    const initialNumbers = generateNumber(qtd)
    const [numbers, setNumbers] = useState(initialNumbers)

    return (
        <div className="Mega">
            <h2>Mega-Sena Results</h2>
            <h3>{numbers.join(' ')}</h3>
            <div>
                <label>Numbers qtd: </label>
                <input
                    min="6"
                    max="10"
                    type="number"
                    value={qtd}
                    onChange={(e) => {
                        setQtd(+e.target.value)
                        setNumbers(generateNumber(+e.target.value))
                    }} />
            </div>
            <button onClick={(_) => setNumbers(generateNumber(qtd))}>
                Generate Numbers
            </button>
        </div>
    )
}