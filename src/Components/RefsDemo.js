import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
        this.inputRefs = React.createRef()
        // this.cbRefs  = null
        // this.setRef = element =>{
        //     this.cbRefs = element
        // }

    }
    componentDidMount(){
        this.inputRefs.current.focus()
        console.log(this.inputRefs)
        // if(this.cbRefs){
        //     this.cbRefs.focus()
        // }
    }
clickHandler = ()=>{
    alert(this.inputRefs.current.value)
    // alert(this.cbRefs.value)
}
    
  render() {
    return (
      <div>
    <input type='text' ref = {this.inputRefs}></input>
    {/* <input type='text' ref = {this.setRef}></input> */}
        <button onClick={this.clickHandler}>Click Here</button>
      </div>
    )
  }
}

export default RefsDemo
