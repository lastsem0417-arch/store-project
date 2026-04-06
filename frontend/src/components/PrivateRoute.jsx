import { Navigate } from "react-router-dom"

function PrivateRoute({ children }) {

const isAdmin = localStorage.getItem("admin")

return isAdmin ? children : <Navigate to="/login" />

}

export default PrivateRoute