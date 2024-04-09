const Restaurant =require("../tables/restaurant")

const expr =require("express")
const exp = expr.Router()

exp.post("/",async(req,res)=>{
    const result = Restaurant({
        restaurant_Name:req.body.restarentname,
        restaurant_location:req.body.restarentlocation
    })

    await result.save()
    res.send(result)
})

exp.get("/getallrestaurant", async(req,res)=>{
    const result = await Restaurant.find().select({restaurant_Name:1,restaurant_location:1})
    res.send(result)
})

module.exports = exp;