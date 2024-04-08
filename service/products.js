const Products =require("../tables/product")

const exp = require("express")
const ex = exp.Router()

ex.post("/",async(req,res)=>{
    const result = Products({
        Restaurant_Name:req.body.restarentname,
        Product_Name:req.body.productname,
        Product_id:req.body.productid,
        Product_Details:req.body.productdetails,
        Product_Price:req.body.productprice,
        Product_Stack:req.body.productstack


    })
    await result.save()
    res.send(result)
})

ex.get("/",async(req,res)=>{
    const  result =await Products.find({Restaurant_Name:"KFC"}).select({Product_Name:1,Product_Details:1,Product_Price:1,Product_Stack:1})
    res.send(result)
})

module.exports = ex;