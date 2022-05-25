import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
      this.greet=this.greet.bind(this)
    }
    greet(childName){
      alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.greet}/>
      </div>
    )
  }
}

export default Parent
