import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const handleLogin = (e)=>{

e.preventDefault()

if(username === "admin" && password === "1234"){

// SAVE LOGIN
localStorage.setItem("admin","true")

// REDIRECT
navigate("/", { replace: true })

}else{

alert("Invalid credentials")

}

}

return(

<div className="flex items-center justify-center h-screen bg-gray-200">

<form
onSubmit={handleLogin}
className="bg-white p-8 rounded shadow w-80"
>

<h2 className="text-xl font-bold mb-4 text-center">
Admin Login
</h2>

<input
className="border p-2 w-full mb-3"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="password"
className="border p-2 w-full mb-3"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600">

Login

</button>

</form>

</div>

)

}

export default Login