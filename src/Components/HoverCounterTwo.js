import React, { Component } from 'react'

class HoverCounterTwo extends Component {
  render() {
      const {count, incrementHander} = this.props
    return (
      <div>
        <h1 onMouseOver={incrementHander}>Hovered {count} times to implement render props</h1>
      </div>
    )
  }
}

export default HoverCounterTwo
