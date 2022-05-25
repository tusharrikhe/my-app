import React, { Component } from 'react'
import ComponentE from './ComponentE'
import UserContext from './userContext'

class ComponentD extends Component {
  render() {
    return (
      <div>
        ComponentE context {this.context}
        <ComponentE/>
      </div>
    )
  }
}
ComponentD.contextType = UserContext
export default ComponentD
