import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
    let className = props.primary?'primary':'secondary'    /* coming from app js as props */
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
