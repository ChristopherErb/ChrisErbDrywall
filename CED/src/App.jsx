import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import NavBar from './components/navbar'
import Main from './components/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <Header />
        <Main />
        <NavBar />

    </div>
  )
}

export default App
