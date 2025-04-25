import { useState } from 'react'
import './App.css'
import CounterPage from "./CounterPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <CounterPage />
  )
}

export default App
