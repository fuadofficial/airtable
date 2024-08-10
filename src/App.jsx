// import Counter from './components/counter/Counter'
// import Search from './components/Search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Product from './pages/Product'
import Header from './components/HomeProject/Header/Header'
import ProtectdRoute from './components/HomeProject/ProtectedRout/ProtectedRout'

const App = () => {
    return (
        <div>
            {/* search project */}
            {/* <Search /> */}

            {/* counter porject */}
            {/* <Counter /> */}

            {/* ProductProject */}
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route element={<ProtectdRoute />}>
                        <Route path='/about' element={<About />} />
                        <Route path='/product' element={<Product />} />
                        <Route path='/product/:id' element={<Product />} />
                    </Route>
                </Routes>
            </Router>

        </div>
    )
}

export default App

