const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

const connectDB = require("./config/db")

const productRoutes = require("./routes/productRoutes")
const saleRoutes = require("./routes/saleRoutes")

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use("/api/products", productRoutes)
app.use("/api/sales", saleRoutes)

app.listen(process.env.PORT, () => {

console.log(`Server running on port ${process.env.PORT}`)

})