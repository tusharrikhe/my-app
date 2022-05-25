import React from 'react'
// In inline styling, we define property using camel case
const heading = {
    fontSize : '72px',
    color : 'purple'
}

function Inline() {
  return (
    <div>
      <h2 style={heading}>Inline CSS</h2>
    </div>
  )
}

export default Inline
