import React, { Component } from 'react'

class UserCoorDisplay extends Component {
  render() {
    return (
      <div onMouseMove={this.props.showCoordinate}>
        X coordinate: {this.props.x}
        Y coordinate: {this.props.y}
      </div>
    )
  }
}

export default UserCoorDisplay
