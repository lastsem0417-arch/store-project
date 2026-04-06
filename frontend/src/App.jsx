import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Layout from "./components/Layout"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Products from "./pages/Products"
import Billing from "./pages/Billing"
import Sales from "./pages/Sales"

function App(){

// IMPORTANT FIX
const isAdmin = localStorage.getItem("admin") === "true"

return(

<BrowserRouter>

<Routes>

{/* LOGIN PAGE */}
<Route path="/login" element={<Login />} />

{/* DASHBOARD */}
<Route
path="/"
element={
isAdmin ? (
<Layout>
<Dashboard />
</Layout>
) : (
<Navigate to="/login" replace />
)
}
/>

{/* PRODUCTS */}
<Route
path="/products"
element={
isAdmin ? (
<Layout>
<Products />
</Layout>
) : (
<Navigate to="/login" replace />
)
}
/>

{/* BILLING */}
<Route
path="/billing"
element={
isAdmin ? (
<Layout>
<Billing />
</Layout>
) : (
<Navigate to="/login" replace />
)
}
/>

{/* SALES */}
<Route
path="/sales"
element={
isAdmin ? (
<Layout>
<Sales />
</Layout>
) : (
<Navigate to="/login" replace />
)
}
/>

{/* DEFAULT REDIRECT */}
<Route path="*" element={<Navigate to="/" />} />

</Routes>

</BrowserRouter>

)

}

export default App