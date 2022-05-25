import React, { Component } from 'react'
import ClickCounterTwo from './ClickCounterTwo'
import HoverCounterTwo from './HoverCounterTwo'

 class User extends Component {
    
  render() {
    return (
      <div>
        {this.props.name()}
      </div>
    )
  }
}

export default User
