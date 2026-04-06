const mongoose = require("mongoose")

const saleSchema = new mongoose.Schema({

products:[
{
productId:String,
name:String,
price:Number,
quantity:Number
}
],

total:{
type:Number
},

date:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Sale",saleSchema)