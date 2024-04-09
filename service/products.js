const Products =require("../tables/product")

const exp = require("express")
const ex = exp.Router()

ex.post("/addProduct",async(req,res)=>{
    const result = Products({
        Restaurant_Name:req.body.restarentname,
        Product_category:req.body.category,
        Product_subcategory:req.body.subcategory,
        Product_Name:req.body.productname,
        Product_id:req.body.productid,
        Product_Details:req.body.productdetails,
        Product_Price:req.body.productprice,
        Product_Stack:req.body.productstack


    })
    await result.save()
    res.send(result)
})

ex.get("/getAllProducts",async(req,res)=>{
    const  result =await Products.find().select({Product_Name:1,Product_Details:1,Product_Price:1,Product_Stack:1})
    res.send(result)
})

ex.get("/getByProductName/:category",async(req,res)=>{
    const result = await Products.find({Product_category:req.params.category}).select({Product_Name:1,Product_Details:1})
    res.send(result)
})


module.exports = ex;