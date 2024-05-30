const mongodb = require("mongoose")
const { Schema, Types } = mongodb;

const ProductSchema = new mongodb.Schema({

    Restaurant_Name:{ type: Types.ObjectId, ref: 'Restaurant', required: true },
    Product_category:String,
    Product_subcategory:String,
    Product_Name:String,
    Product_id:String,
    Product_Details:String,
    Product_Price:Number,
    Product_Stack:Number
    
})

const Products = mongodb.model("Products",ProductSchema)

module.exports =Products;