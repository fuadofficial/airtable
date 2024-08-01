import { Link } from 'react-router-dom'
import './Header.css'
import { useContext } from 'react'
import { AuthContext } from '../../../context/authContext'

const Header = () => {
    const { auth } = useContext(AuthContext)
    return (
        <header className='navbar'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            {auth && <Link to={'/product'}>Product</Link>}
            <Link to={'/login'}>Login</Link>
        </header>
    )
}

export default Header