import { useState } from 'react'
import './App.css'
import UserContextProvider from './content/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <div className="flex justify-center items-center bg-gray-400 w-full h-screen">
      <Login />
      <Profile />
      </div>
      
    </UserContextProvider>
  )
}

export default App
