import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/ButtonAppBar'
import ButtonAppBar from './components/ButtonAppBar'
import BasicTable from './components/BasicTable'
import BasicCard from './components/BasicCard'
function App() {
  const [ userData, setUserData ] = useState(["user", "password"]);
  function changeUserData(i, text){
    if(i==1){
      console.log("change"+userData)
      setUserData([text, userData[1]])
    }else if(i==2){
      setUserData([userData[0], text])
    }
  }
  return (
    <div>
      <ButtonAppBar changeUserData={changeUserData}/>
      <BasicCard/>
      <BasicTable/>
    </div>
  )
}

export default App
