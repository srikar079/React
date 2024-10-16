import { useState } from 'react'

import './App.css'
import Todos from '../src/assets/components/Todos'
import AddTodo from '../src/assets/components/AddTodo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1>Hi</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
