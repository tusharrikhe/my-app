import React, { Component } from 'react'

 class UserParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }

    showCoordinate = (e)=>{
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    
  render() {
    return (
      <div>
        {this.props.render(this.state.x, this.state.y,this.showCoordinate)}
      </div>
    )
  }
}

export default UserParent
