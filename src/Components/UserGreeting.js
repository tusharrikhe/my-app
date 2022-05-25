import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isLoggedIn :true
       }
     }
     
  render() {

    //----------------------------By Short circuit operator---------------------
    // this method is used when we want to display true condition and display nothing if the condition is false
        return this.state.isLoggedIn && <div>Welcome User </div>
      //--------------------------By ternary operator----------------------------
    //   return(
    //       this.state.isLoggedIn?<div>User Exist</div>: <div>User is new</div>
    //   )

    //By if else method
    //   if(this.state.isLoggedIn){
    //       return <div> User exists</div>
    //   }else{
    //      return <div>User is new</div>
    //   }
//-----------------------------by element variable method-------------------------

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>User exists</div>
        // }else{
        //     message = <div>User is new</div>
        // }
        // return <div>{message}</div>
  }

}

export default UserGreeting
