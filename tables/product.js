const mongodb = require("mongoose")

const ProductSchema = new mongodb.Schema({

    Restaurant_Name:String,
    Product_Name:String,
    Product_id:String,
    Product_Details:String,
    Product_Price:Number,
    Product_Stack:Number
    
})

const Products = mongodb.model("Products",ProductSchema)

module.exports =Products;