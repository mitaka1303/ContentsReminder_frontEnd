import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/ButtonAppBar'
import ButtonAppBar from './components/ButtonAppBar'
import BasicTable from './components/BasicTable'
import BasicCard from './components/BasicCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ButtonAppBar/>
      <BasicCard/>
      <BasicTable/>
    </div>
  )
}

export default App
