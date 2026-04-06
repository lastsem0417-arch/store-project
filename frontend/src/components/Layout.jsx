import { Link } from "react-router-dom"

function Layout({ children }) {

return (

<div className="flex h-screen bg-gray-100">

{/* Sidebar */}

<div className="w-64 bg-gray-900 text-white p-6">

<h1 className="text-2xl font-bold mb-8">
Khushi Store
</h1>

<nav className="space-y-4">

<Link className="block hover:text-yellow-400" to="/">
Dashboard
</Link>

<Link className="block hover:text-yellow-400" to="/products">
Products
</Link>

<Link className="block hover:text-yellow-400" to="/billing">
Billing
</Link>

<Link className="block hover:text-yellow-400" to="/sales">
Sales
</Link>

</nav>

</div>

{/* Main Content */}

<div className="flex-1 p-8">

{children}

</div>

</div>

)

}

export default Layout