import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/ButtonAppBar'
import ButtonAppBar from './components/ButtonAppBar'
import BasicTable from './components/BasicTable'
import BasicCard from './components/BasicCard'
import {getList} from './Api'
function App() {
  const [ userData, setUserData ] = useState(["user", "password"]);
  const [ list, setList ] = useState(null);
  function changeUserData(i, text){
    if(i==1){
      console.log("change"+userData)
      setUserData([text, userData[1]])
    }else if(i==2){
      setUserData([userData[0], text])
    }
  }
async function reloadList(){
  let data = await getList(userData[0], userData[1])
  console.log(data)
  setList(data)
  console.log(list)
}
  return (
    <div>
      <ButtonAppBar changeUserData={changeUserData} userData={userData} reloadList={reloadList}/>
      <BasicCard/>
      <BasicTable list={list} userData={userData}/>
    </div>
  )
}

export default App
