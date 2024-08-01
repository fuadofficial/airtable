import { createContext, useState } from "react";

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)

    const logout = () => {
        setAuth(false)
    }
    const login = () => {
        setAuth(true)
    }

    return (
        <AuthContext.Provider value={{ auth,setAuth, logout, login }}>
            {children}
        </AuthContext.Provider>
    )
}