require("dotenv").config()
const ex=require("express")
const ser= require("./service/registrations")
const api = require("./service/products")
const apis = require("./service/restaurant")
require("./database/mongodb")
const cors = require("cors")



const exp =ex()

exp.use(cors())
 exp.use(ex.json())



 exp.use("/",ser)
 exp.use("/p",api)
 exp.use("/r",apis)
 
 
exp.get("/test",async (req,res)=>{
    res.send("test api works.");
})





exp.listen (process.env.port)



