import React from "react"
import Person from "./Person"
import Signin from "./Signin"
import Card from "./Card"

const App = () => (
  <div>
    <h1>Hello World!</h1>

    <Person firstname="Bob" age={30} />

    <h2>Formulaire</h2>
    <Signin onSubmit={(email, password) => console.log(email, password)} />

    <h2>Card</h2>

    <Card
      icon={<span>⭐</span>}
      title={({ icon }) => (
        <h3>{icon} Lorem ipsum</h3>
      )}>
      Dolor sit amet...
    </Card>

  </div>
)

export default App
