import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id:1,
            name: 'Tushar',
            domain: 'ReactJs',
            experience: 2
        },
        {
            id:2,
            name: 'Kanu',
            domain: 'Dentist',
            experience: 2
        },
        {
            id:3,
            name: 'Raj',
            domain: 'Civil Servant',
            experience: 5
        }
    ]

  return (
    <div>
        <Person  person = {persons}></Person>
    </div>
  )
}

export default NameList
