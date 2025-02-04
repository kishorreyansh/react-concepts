import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoListComponent from './components/ToDoList/ToDoListComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <ToDoListComponent />
      
    </>
  )
}

export default App
