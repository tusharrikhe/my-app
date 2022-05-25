import React, { Component } from 'react'
const withCounterHOC = (WrappedComponent, incrementValue)=>{
    class NewComponent extends Component{
        constructor(props){
            super(props)
            this.state ={
                count:0
            }
        }
        countIncrement = ()=>{
            this.setState(prevState=>{
                return {count:prevState.count+incrementValue}
            })
        }
        render(){
            return(
                <WrappedComponent
                    count={this.state.count}
                    clickHandler={this.countIncrement}
                    {...this.props}
                />
            )
        }
    }
    return NewComponent
}


export default withCounterHOC
