import React from 'react'

function CounterExp() {
    let counter = 0;
   function increment(){
        counter = counter+1;
        console.log(counter)
    }
  return (
    <div>
      <button onClick={increment}>counter</button>
      <h1>{counter}</h1>
    </div>
  )
}

export default CounterExp
