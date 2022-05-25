// import React from 'react'
// import ReactDom from 'react-dom'

// function Portal() {
//   return ReactDom.createPortal(
//     <div>
//       <h1>Portals Demo</h1>
//     </div>,
//     document.getElementById('portal')
//   )
// }
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Portal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <h1>Portal Demo</h1>
      </div>,
      document.getElementById('portal')
    )
  }
}

export default Portal



