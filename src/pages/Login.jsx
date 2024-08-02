import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import Container from '../layout/Container'

const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    return (
        <Container>
            <div >

                <h1>Plese Login</h1>
                <button onClick={() => {
                    login();
                    navigate(-1);
                }}>Login</button>
            </div>
        </Container >
    )
}

export default Login