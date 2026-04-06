import { useEffect, useState } from "react"
import API from "../services/api"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

function Billing() {

const [products,setProducts] = useState([])
const [cart,setCart] = useState([])

useEffect(()=>{
fetchProducts()
},[])

const fetchProducts = async ()=>{
const res = await API.get("/products")
setProducts(res.data)
}

// ADD TO CART
const addToCart = (product)=>{

const exist = cart.find(item=>item._id===product._id)

if(exist){
setCart(
cart.map(item =>
item._id === product._id
? {...item, quantity:item.quantity+1}
: item
)
)
}else{
setCart([...cart,{...product,quantity:1}])
}

}

// TOTAL
const total = cart.reduce((sum,item)=>{
return sum + item.price * item.quantity
},0)

// SAVE SALE
const createSale = async ()=>{

await API.post("/sales",{
products:cart,
total:total
})

alert("Bill Generated")

}

// DOWNLOAD PDF
const downloadBill = async ()=>{

const element = document.getElementById("bill")

const canvas = await html2canvas(element)

const imgData = canvas.toDataURL("image/png")

const pdf = new jsPDF()

pdf.addImage(imgData,"PNG",10,10,180,150)

pdf.save("bill.pdf")

}

return(

<div className="p-8 bg-gray-100 min-h-screen">

<h1 className="text-3xl font-bold text-blue-600 mb-8">
Billing System
</h1>

<div className="grid grid-cols-2 gap-10">

{/* PRODUCTS */}

<div>

<h2 className="text-xl font-semibold mb-4">
Products
</h2>

<div className="space-y-3">

{products.map(p=>(

<div
key={p._id}
className="flex justify-between items-center bg-white p-4 rounded shadow"
>

<div>
<p className="font-medium">{p.name}</p>
<p className="text-gray-500">₹{p.price}</p>
</div>

<button
onClick={()=>addToCart(p)}
className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
>
Add
</button>

</div>

))}

</div>

</div>

{/* BILL */}

<div>

<h2 className="text-xl font-semibold mb-4">
Bill Preview
</h2>

<div
id="bill"
className="bg-white p-6 rounded shadow space-y-3"
>

<h2 className="text-center text-xl font-bold">
Khushi Cleaning Store
</h2>

<p className="text-center text-gray-500 text-sm">
Date: {new Date().toLocaleDateString()}
</p>

<hr/>

{cart.length === 0 && (
<p className="text-gray-500 text-center">
No items added
</p>
)}

{cart.map((item,index)=>(

<div key={index} className="flex justify-between">

<p>
{item.name} × {item.quantity}
</p>

<p>
₹{item.price * item.quantity}
</p>

</div>

))}

<hr/>

<div className="flex justify-between font-bold text-lg">

<p>Total</p>
<p>₹{total}</p>

</div>

<p className="text-center text-sm text-gray-500 mt-4">
Thank You! Visit Again 🙏
</p>

</div>

{/* BUTTONS */}

<div className="mt-4 space-y-2">

<button
onClick={createSale}
className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
>
Save Sale
</button>

<button
onClick={downloadBill}
className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
>
Download PDF
</button>

</div>

</div>

</div>

</div>

)

}

export default Billing