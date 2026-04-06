import { useEffect,useState } from "react"
import API from "../services/api"

import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
CartesianGrid
} from "recharts"

function Sales(){

const [sales,setSales] = useState([])

useEffect(()=>{
fetchSales()
},[])

const fetchSales = async()=>{

const res = await API.get("/sales")

setSales(res.data)

}

const chartData = sales.map((sale,index)=>({

name:`Sale ${index+1}`,
total:sale.total

}))

return(

<div className="p-8 space-y-10">

<h1 className="text-3xl font-bold">
Sales Analytics
</h1>

{/* sales table */}

<div className="bg-white p-6 rounded shadow">

<h2 className="text-xl font-semibold mb-4">
Sales History
</h2>

<table className="w-full">

<thead className="bg-gray-100">

<tr>

<th className="p-3 text-left">Date</th>
<th className="p-3 text-left">Items</th>
<th className="p-3 text-left">Total</th>

</tr>

</thead>

<tbody>

{sales.map((sale,index)=>(

<tr key={index} className="border-t">

<td className="p-3">
{new Date(sale.date).toLocaleString()}
</td>

<td className="p-3">
{sale.products.length} Items
</td>

<td className="p-3 font-bold text-green-600">
₹{sale.total}
</td>

</tr>

))}

</tbody>

</table>

</div>

{/* chart */}

<div className="bg-white p-6 rounded shadow">

<h2 className="text-xl font-semibold mb-4">
Sales Trend
</h2>

<ResponsiveContainer width="100%" height={300}>

<LineChart data={chartData}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Line type="monotone" dataKey="total" stroke="#22c55e"/>

</LineChart>

</ResponsiveContainer>

</div>

</div>

)

}

export default Sales