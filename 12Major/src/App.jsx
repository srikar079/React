import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import authService from './appwrite/auth';
import {login,logout} from './store/authSlice.js'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

console.log(import.meta.env.VITE_APPWRITE_URL);

useEffect(() => {
  authService.getCurrentUser()
  .then((userData)=>{
          if(userData){
            dispatch(login({userData}))
          }
          else{
            dispatch(logout())
          }
  })
  .finally(()=>setLoading(false))
},[]) 
  return !loading ? (
    <div>
      loading
    </div>
  )
}

export default App
