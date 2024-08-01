import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import Home from './Home'

const Login = () => {
  const { auth, login } = useContext(AuthContext)
  console.log(auth);
  return (
    <div>
      {auth ? (
        <Home />
      ) : (
        <>
          <h1>Plese Login</h1>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  )
}

export default Login