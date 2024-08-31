import React, { useState } from 'react'

function App2() {
    const [c,setC] = useState(0)
    const inc = () =>{
        setC(c+1)
    }
  return (
    <>
    <div>Counter {c}</div>
    <button type='submit' onClick={inc}>Submit</button>
    </>
  )
}

export default App2