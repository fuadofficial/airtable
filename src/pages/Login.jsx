import {useAuth } from '../context/authContext'
import Home from './Home'
import Container from '../layout/Container'

const Login = () => {

  const { auth, login } = useAuth()
  console.log(auth);
  return (
    <Container>
      <div >
        {auth ? (
          <Home />
        ) : (
          <>
            <h1>Plese Login</h1>
            <button onClick={login}>Login</button>
          </>
        )}
      </div>
    </Container>
  )
}

export default Login