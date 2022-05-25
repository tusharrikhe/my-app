import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'TUshar'
      }
      console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props, state){
       console.log('lifeCycle A getDerivedFromProps')
       return null
    }
    componentDidMount(){
        console.log('lifecycleA component did mount')
    }
  render() {
      console.log('LifeCycleA render method')
    return (
        
      <div>
            LifeCycleA
            <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA
