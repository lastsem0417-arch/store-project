import { useEffect, useState } from "react"
import API from "../services/api"

import {
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer
} from "recharts"

function Dashboard(){

const [products,setProducts] = useState([])
const [sales,setSales] = useState([])

useEffect(()=>{
loadData()
},[])

const loadData = async()=>{

const p = await API.get("/products")
const s = await API.get("/sales")

setProducts(p.data)
setSales(s.data)

}

const revenue = sales.reduce((sum,s)=>sum+s.total,0)

// chart data

const chartData = sales.map((sale,index)=>({

name:`Sale ${index+1}`,
total:sale.total

}))

return(

<div className="p-8 space-y-10">

<h1 className="text-3xl font-bold">
Dashboard Overview
</h1>

{/* cards */}

<div className="grid grid-cols-4 gap-6">

<div className="bg-blue-500 text-white p-6 rounded shadow">
<p>Total Products</p>
<h2 className="text-3xl font-bold">
{products.length}
</h2>
</div>

<div className="bg-green-500 text-white p-6 rounded shadow">
<p>Total Sales</p>
<h2 className="text-3xl font-bold">
{sales.length}
</h2>
</div>

<div className="bg-purple-500 text-white p-6 rounded shadow">
<p>Total Revenue</p>
<h2 className="text-3xl font-bold">
₹{revenue}
</h2>
</div>

<div className="bg-red-500 text-white p-6 rounded shadow">
<p>Low Stock</p>
<h2 className="text-3xl font-bold">
{products.filter(p=>p.stock < 5).length}
</h2>
</div>

</div>

{/* chart */}

<div className="bg-white p-6 rounded shadow">

<h2 className="text-xl font-semibold mb-4">
Sales Chart
</h2>

<ResponsiveContainer width="100%" height={300}>

<BarChart data={chartData}>

<CartesianGrid strokeDasharray="3 3" />

<XAxis dataKey="name" />

<YAxis />

<Tooltip />

<Bar dataKey="total" fill="#3b82f6" />

</BarChart>

</ResponsiveContainer>

</div>

</div>

)

}

export default Dashboard