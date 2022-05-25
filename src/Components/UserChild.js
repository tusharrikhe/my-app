import React, { Component } from 'react'

 class UserChild extends Component {
    
  render() {

    const {x,y,showCoordinate} = this.props

    return (
      <div onMouseOver={showCoordinate}>
        <p>The current position of mouse is {x}, {y}</p>
      </div>
    )
  }
}

export default UserChild
