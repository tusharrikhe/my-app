import React, { Component } from 'react'

class ClassHandler extends Component {
    classHandle(){
        console.log("Button clicked from class handler")
    }
  render() {
    return (
      <div>
        <button onClick={()=>this.classHandle()}>Click me Class</button>
      </div>
    )
  }
}

export default ClassHandler
