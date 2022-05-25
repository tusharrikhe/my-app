import React, {Component } from 'react'
import PureCom from './PureCom'
import RegCom from './RegCom'
import MemoCom from './MemoCom'

class ParentCom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Tushar'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Tushar'
            })
        }, 2000)

    }
    
  render() {
      console.log('******************Parent Component**************************')
    return (
      <div>
       { /*<RegCom name = {this.state.name}/>
        <PureCom name ={this.state.name}/>*/}
        <MemoCom name = {this.state.name}/>
      </div>
    )
  }
}

export default ParentCom
