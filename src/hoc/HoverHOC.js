import React, { Component } from 'react'
import withCounterHOC from './withCounterHOC'
 class HoverHOC extends Component {
  render() {
    return (
      <div>
      <p onMouseOver={this.props.clickHandler}>Hovered {this.props.count} times</p>
        
      </div>
    )
  }
}

export default withCounterHOC(HoverHOC,5)
