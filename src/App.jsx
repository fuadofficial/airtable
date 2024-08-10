// import Counter from './components/counter/Counter'
// import Search from './components/Search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Product from './pages/Product'
<<<<<<< HEAD
import Header from './components/HomeProject/Header/Header'
import ProtectdRoute from './components/HomeProject/ProtectedRout/ProtectedRout'
=======
import ProtectdRoute from './components/HomeProject/ProtectedRout/ProtectedRout'
import Header from './components/HomeProject/Header/Header'
import ErrorPage from './pages/ErrorPage'
>>>>>>> 5816d9b1bf0ec206bae658d5ff7ee1430db8203a

const App = () => {
    return (
        <div>
            {/* search project */}
            {/* <Search /> */}

            {/* counter porject */}
            {/* <Counter /> */}

            {/* ProductProject */}
<<<<<<< HEAD
=======


>>>>>>> 5816d9b1bf0ec206bae658d5ff7ee1430db8203a
            <Router>
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
            </Router>
        </div>
    )
}

export default App

