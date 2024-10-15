
import './App.css'
import Login from '../../08practice/src/Components/Login'
import Profile from '../../08practice/src/Components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <>
      <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
    </>
  )
}

export default App
