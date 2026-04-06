const Sale = require("../models/Sale")

exports.createSale = async(req,res)=>{

try{

const sale = new Sale(req.body)

await sale.save()

res.json(sale)

}catch(error){

res.status(500).json(error)

}

}

exports.getSales = async(req,res)=>{

try{

const sales = await Sale.find()

res.json(sales)

}catch(error){

res.status(500).json(error)

}

}