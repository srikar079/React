  import { useCallback, useState,useEffect } from 'react'

import './App.css'


function App() {
  const [password,setPassword]=useState("");
  const[length,setlength]=useState(8);
  const[letters,setLetters]= useState(true);
  const[numbers,setNumbers]= useState(true);
  const yesnol = () => {
    setLetters(prevLetters => !prevLetters);  // Toggle letters state
  };
  const passwordgenerator=useCallback(()=>{
    var pass="";
    var x='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(letters){
      x+='12345678890';
    }
    if(numbers){
    x+='+-*/)(_=';
    }
    for(var i =0;i<length;i++){
      pass+=x.charAt((Math.floor) (Math.random()*length+1));
    }
    console.log('usecall')
    setPassword(pass);

  },[length,letters,numbers])
  useEffect(()=>{
    console.log('useef')
    passwordgenerator();
  },[length,letters,numbers,passwordgenerator])
  return (
    <>
    <div style={{backgroundColor:'blue', height:300,width:400, margin:`40px 100px 120px 80px`}}>
      <div>
      <input type='textbox' name="ap" value={password} readOnly></input>
      </div>
    <button id="ok" onClick={() => yesnol()}>Letters</button>
    <button id="ok" onClick={() => yesnon()}>Numbers</button>
    
    </div>
    </>
  )
}

export default App
