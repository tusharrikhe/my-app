import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
      super(props)
        this.inputRefs = React.createRef()
    }
    focusInput(){
      console.log(this.inputRefs)
        this.inputRefs.current.focus()
    }
     
  render() {
    return (
      <div>
        <input type='text' ref = {this.inputRefs}/>
      </div>
    )
  }
}

export default Input
