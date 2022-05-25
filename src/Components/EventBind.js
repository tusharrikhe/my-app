import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super()
        this.state = {
            message: 'hello'
        }
        // this.EventBind = this.EventBind.bind(this)
    }
    // EventBind(){
    //     this.setState({
    //         message:'Have a good day'
    //     })
        EventBind = ()=>{
            this.setState({
                message:"Have a Good Day"
            })
    }
  render() {
    return (
      <div>
      {/*  <button onClick={()=>this.EventBind()}>Click here to check EventBind</button>   or this.EventBind.bind(this)*/}
      {/*<button onClick={this.EventBind}>Click here to check EventBind</button>  for this approach we wrote a code in constructor*/}
      <button onClick={this.EventBind}>Click here to check EventBind</button> {/* binding by defining EventBind method using arrow function*/} 
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

export default EventBind
