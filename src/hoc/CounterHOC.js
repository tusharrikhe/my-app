import React, { Component } from 'react'
import withCounterHOC from './withCounterHOC'

class CounterHOC extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.clickHandler}>Count: {this.props.count}</button>
      </div>
    )
  }
}

export default withCounterHOC(CounterHOC, 10)
