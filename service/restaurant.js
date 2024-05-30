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

exp.post("/addAll",async(req,res)=>{
   const result = await Restaurant.insertMany(req.body)
  .then(() => {
    console.log('Data inserted successfully');
  })
  .catch(err => {
    console.error('Error inserting data:', err);
  });

    res.send(result)
})

exp.get("/getallrestaurant", async(req,res)=>{
    const result = await Restaurant.find()
    res.send(result)
})

module.exports = exp;