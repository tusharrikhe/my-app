import React from 'react'

function MemoCom({name}) {
    console.log("THis is a memo component")
  return (
    <div>
      <h1>This is memo Component</h1>
    </div>
  )
}

export default React.memo(MemoCom)
