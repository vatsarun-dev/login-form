import React from 'react'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import {useState} from 'react'
const App = () => {
  const [state, setToggle] = useState(true)
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f5f8fb]">
      {
        state ? <SignUp setToggle={setToggle} /> : <SignIn setToggle={setToggle}/>
      }
    </div>
  )
}

export default App
