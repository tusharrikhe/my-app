import React from 'react'

function FunctionHandler() {
    function clickHandler(){
        console.log("Button Clicked")
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionHandler
