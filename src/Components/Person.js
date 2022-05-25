import React from 'react'

function Person({person}) {
    const nameList = person.map((person)=>{
        return <h2>Name: {person.name} Domain: {person.domain} Experience: {person.experience}</h2>
    })
  return (
    
    <div>
      
    {nameList}
      
      
    </div>
  )
}

export default Person
