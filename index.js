require("dotenv").config()
const ex=require("express")
const user= require("./service/registrations")
const products = require("./service/products")
const restaurant = require("./service/restaurant")

const biriyani = require("./service/products")
require("./database/mongodb")
const cors = require("cors")



const exp =ex()

exp.use(cors())
 exp.use(ex.json())



 exp.use("/user",user)
 exp.use("/products",products)
 exp.use("/restaurant",restaurant)
 exp.use("/biriyani",biriyani)
//  exp.use("/restaurant",restaurant)
 
 





exp.listen (process.env.port)



