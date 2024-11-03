import { useContext } from "react"
import { AuthContext } from "../../../context/authContext"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRout = () => {
  const { auth } = useContext(AuthContext)

  if (!auth) {
    return <Navigate to={'/login'} />
  }
  return <Outlet />
}

export default ProtectedRout