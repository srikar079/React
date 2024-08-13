import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let[val,setCounter]=useState(5)


 
    
  const addvalue= ()=>{
           val=val+1;   
           console.log(val);  
           setCounter(val);      
  }

  const decvalue=()=>{
     if(val<1){
      setCounter(val);
     }
     else{
      setCounter(val-1)
     }
  }
  return (
    <>
      <h1>noice</h1>
          <h2>Random number {val}</h2>
          <button onClick={addvalue}
          >Click to add</button>

          <button onClick={decvalue}
          >Click to remove</button>
    </>
  )
}

export default App
