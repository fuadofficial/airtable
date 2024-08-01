import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import Home from './Home'

const Login = () => {
  const { auth, setAuth } = useContext(AuthContext)
  return (
    <div>
      {auth ? (
        <Home />
      ):(
      <>
        <h1>Plese Login</h1>
        <button onClick={() => setAuth(true)}>Login</button>
      </>
      )}
    </div>
  )
}

export default Login