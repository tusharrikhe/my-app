import React, { Component } from 'react'

class ClickCounterTwo extends Component {
  render() {
      const {count, incrementHander} = this.props
    return (
      <div>
        <button onClick={incrementHander}>Click {count} times to implement render</button>
      </div>
    )
  }
}

export default ClickCounterTwo

