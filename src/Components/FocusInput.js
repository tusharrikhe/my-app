import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.comopountRefs = React.createRef()
    }
    clickHandler = ()=>{
      console.log(this.comopountRefs)
        this.comopountRefs.current.focusInput()
    }
  render() {
    return (
      <div>
        <Input ref={this.comopountRefs}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
