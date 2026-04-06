import { useState,useEffect } from "react"
import API from "../services/api"

function Products(){

const [products,setProducts] = useState([])

const [name,setName] = useState("")
const [price,setPrice] = useState("")
const [stock,setStock] = useState("")
const [editId,setEditId] = useState(null)

useEffect(()=>{
getProducts()
},[])

const getProducts = async()=>{
const res = await API.get("/products")
setProducts(res.data)
}

// ADD / UPDATE

const handleSubmit = async(e)=>{

e.preventDefault()

if(editId){

await API.put(`/products/${editId}`,{
name,price,stock
})

setEditId(null)

}else{

await API.post("/products",{name,price,stock})

}

setName("")
setPrice("")
setStock("")

getProducts()

}

// DELETE

const deleteProduct = async(id)=>{

await API.delete(`/products/${id}`)
getProducts()

}

// EDIT

const editProduct = (p)=>{

setName(p.name)
setPrice(p.price)
setStock(p.stock)
setEditId(p._id)

}

return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-6">
Products
</h1>

<form
onSubmit={handleSubmit}
className="flex gap-4 mb-8"
>

<input
className="border p-2 rounded"
placeholder="Product Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
className="border p-2 rounded"
placeholder="Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<input
className="border p-2 rounded"
placeholder="Stock"
value={stock}
onChange={(e)=>setStock(e.target.value)}
/>

<button className="bg-blue-500 text-white px-4 rounded">

{editId ? "Update" : "Add"}

</button>

</form>

<table className="w-full bg-white shadow rounded">

<thead className="bg-gray-100">

<tr>
<th className="p-3 text-left">Name</th>
<th className="p-3 text-left">Price</th>
<th className="p-3 text-left">Stock</th>
<th className="p-3 text-center">Actions</th>
</tr>

</thead>

<tbody>

{products.map(p=>(

<tr key={p._id} className="border-t">

<td className="p-3">{p.name}</td>

<td className="p-3">₹{p.price}</td>

<td className={`p-3 ${p.stock < 5 ? "text-red-500 font-bold":""}`}>
{p.stock}
</td>

<td className="p-3 flex gap-3 justify-center">

<button
onClick={()=>editProduct(p)}
className="bg-yellow-500 text-white px-3 py-1 rounded"
>

Edit

</button>

<button
onClick={()=>deleteProduct(p._id)}
className="bg-red-500 text-white px-3 py-1 rounded"
>

Delete

</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default Products