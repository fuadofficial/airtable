import { useNavigate } from 'react-router-dom'
<<<<<<< HEAD
 
=======
import Container from '../layout/Container'

>>>>>>> 5816d9b1bf0ec206bae658d5ff7ee1430db8203a
const Home = () => {

    const navigate = useNavigate()

    return (
        <Container>
            <div>
                <h1>Home</h1>
                <button onClick={() => navigate('/login')}>Go to Login Page</button>
                <button onClick={() => navigate('/about')}>Go to About</button>
                <button onClick={() => navigate('/product')}>Go to Product</button>
                <button onClick={() => navigate('/product?companyName=Debug')}>Go to Product with Qury params</button>
                <button onClick={() => navigate('/product/123')}>Go to Product id</button>
                <button onClick={() => navigate('/product/123', {
                    state: {
                        id: 1,
                        name: 'samsung',
                        category: {
                            mbile: '2024',
                            color: 'black'
                        }
                    }
                })}>Go to Product state</button>
            </div>
        </Container>
    )
}

export default Home