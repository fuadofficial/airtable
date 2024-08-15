// import Counter from './components/counter/Counter'
// import Search from './components/Search'

import { useEffect, useState } from "react";
import { BsDatabaseCheck } from "react-icons/bs";

// ProductProject
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Login from './pages/Login'
// import Product from './pages/Product'
// import ProtectdRoute from './components/HomeProject/ProtectedRout/ProtectedRout'
// import Header from './components/HomeProject/Header/Header'
// import ErrorPage from './pages/ErrorPage'

const App = () => {

    const [value, setValue] = useState()

    const fetchApi = async () => {
        const responce = await fetch('http://localhost:3000/product')
        const data = await responce.json();
        setValue(data)
    }

    useEffect(() => {
        fetchApi()
    }, [])


    return (
        <div>
            <ul>
                {value.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>

            {/* search project */}
            {/* <Search /> */}

            {/* counter porject */}
            {/* <Counter /> */}

            {/* ProductProject */}
            {/* <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={<Login />} />
                    <Route element={<ProtectdRoute />}>
                        <Route path='/product' element={<Product />} />
                        <Route path='/product/:id' element={<Product />} />
                    </Route>
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </Router> */}

        </div>
    )
}

export default App

