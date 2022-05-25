import React, { Component } from 'react'
import Input from './Input'

class Parent extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }
    focusHandler = () => {
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.focusHandler}>Focus Here</button>
            </div>
        )
    }
}

export default Parent
