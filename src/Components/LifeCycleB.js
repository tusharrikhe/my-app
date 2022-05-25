import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'TUshar'
      }
      console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props, state){
      console.log('lifeCycle B getDerivedFromProps')
      return null
    }
    componentDidMount(){
        console.log('lifecycleB component did mount')
    }
  render() {
      console.log('LifeCycleB render method')
    return (
        
      <div>
            LifeCycleB
      </div>
    )
  }
}

export default LifeCycleB