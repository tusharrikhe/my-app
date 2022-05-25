import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParent extends Component {
    constructor(props) {
        super(props)
        this.inputRefs = React.createRef()
      }
      clickHandler = ()=>{
        console.log(this.inputRefs)
          this.inputRefs.current.focus();
      }
  render() {      
    return (
      <div>
        <FRInput ref = {this.inputRefs}/>
        <button onClick={this.clickHandler}> Focus Input</button>
      </div>
    )
  }
}

export default FRParent
