import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => navigate('/about')}>Go to About</button>
            <button onClick={() => navigate('/product')}>Go to Product</button>
            <button onClick={() => navigate('/product?companyName=Debug')}>Go to Product with Qury params</button>
            <button onClick={() => navigate('/product/123')}>Go to Product id</button>
        </div>
    )
}

export default Home