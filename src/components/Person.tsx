import React from "react"

interface IProps {
  firstname: string
  age: number
}

const Person: React.SFC<IProps> = ({ firstname, age }) => (
  <div style={{ border: "2px solid #ddd", padding: 20 }}>
    <h2>My name is {firstname}</h2>
    <p>I'm {age}.</p>
  </div>
)

export default Person
