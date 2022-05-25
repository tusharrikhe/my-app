import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            counter:0
        }
    }
    increment(){
        // this.setState({
        //     counter:this.state.counter+1
        // },()=>console.log(this.state.counter))
        // console.log(this.state.counter)  // Due to asynchronous behavior it will run before setState()
        this.setState((prevState)=>({
            counter:prevState.counter+1
        }),console.log(this.state.counter))
    }   
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={()=>{this.incrementFive()}}>Click Here</button>
      </div>
    )
  }
}

export default Counter
