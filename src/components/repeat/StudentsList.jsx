import React from 'react'
import students from '../../data/students'

export default props => {

    const studentsElements = students.map((student) => {
        return (
            <li key={student.id}>
                {student.id}) {student.name} - {student.grade}
            </li>
        )
    })

    return (
        <div>
            <ul style={ {listStyle: 'none', textAlign: "left"} }>
                {studentsElements}
            </ul>
        </div>
    )
}