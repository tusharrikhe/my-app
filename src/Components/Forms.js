import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         language:''
      }
    }
    handleUsername = (event)=>{
        this.setState({
            username: event.target.value
        }
        )
    }

    handleComment = (event)=>{
        this.setState({
            comment:event.target.value
        })
    }

      handleSelector=(event)=>{
          this.setState({
              language:event.target.value
          })
      }
    handleSubmit = (event)=>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.language}`)
        event.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
      <div>
        <label>Username:</label>
        <input type ='text' value={this.state.username} onChange ={this.handleUsername}></input>
      </div>
      <div>
      <label>Comment:</label>
      <textarea type = "text" value={this.state.comment} onChange={this.handleComment}></textarea>
      </div>
      <div>
      <label>Language</label>
      <select value={this.state.language} onChange={this.handleSelector}>
      <option value="react">React</option>
      <option value="angular">Angualr</option>
      <option value="vue">Vue</option>
      </select>
      </div>
        <button type='submit'>submit</button>
      </form>
    )
  }
}

export default Forms
