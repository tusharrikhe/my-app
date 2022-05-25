import React, { Component } from "react";

const withCounter = (WrappedComponent, incrementNumber)=>{
    class WithCounter extends Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          clickHandler = ()=>{
              this.setState((prevState)=>{
                 return {count: prevState.count+incrementNumber}
              })
          }
        render(){
            console.log(this.props.name)
            return <WrappedComponent
             count = {this.state.count} 
             incrementCount = {this.clickHandler}
             {...this.props}/>
        }
        
    }
    return WithCounter
}

export default withCounter