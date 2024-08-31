import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  const username = "chai aur code"
  return (
    <div>
      <h1>sdfasdf!!  {username}</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <MyApp />
) 
