import { Link } from "react-router-dom"

function Navbar(){

return(

<div style={{padding:"20px",background:"#222",color:"#fff"}}>

<h2>Khushi Store Admin</h2>

<Link to="/">Dashboard</Link> |
<Link to="/products">Products</Link> |
<Link to="/billing">Billing</Link> |
<Link to="/sales">Sales</Link>

</div>

)

}

export default Navbar