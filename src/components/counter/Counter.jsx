import React from 'react'
import './Counter.css'

import Display from './Display'
import Step from './Step'
import Buttons from './Buttons'

export default class Counter extends React.Component {
    state = {
        number: this.props.initialNumber || 0,
        step: this.props.initialStep || 5,
    }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step
        })
    }

    setStep = (newStep) => {
        this.setState({
            step: newStep,
        })
    }

    render() {
        return (
            <div className='Counter'>
                <Display number={this.state.number} />
                <Step step={this.state.step} setStep={this.setStep} />
                <Buttons setInc={this.inc} setDec={this.dec} />
            </div>
        )
    }
}