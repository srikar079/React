
import UserContextProvider from './Context/UserContextProvider.jsx'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile.jsx'
import { useState } from 'react'
//import Profile from './Components/Profile.jsx'
function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContextProvider vvalue={{ user, setUser }}>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
