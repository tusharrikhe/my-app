import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    
static getDerivedStateFromError(error){
    return this.state.hasError = true
}
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default ErrorBoundary

