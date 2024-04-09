const Registration = require("../tables/register")
const ex =require("express")
const exp =ex.Router()
const bcrypt = require("bcrypt")

exp.post("/register",async(req,res)=>{
    const result = Registration({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phonenumber:req.body.phonenumber,
        address:req.body.address
        
    })

    const salt = await bcrypt.genSalt(2);
    result.password= await bcrypt.hash(result.password, salt)

    await result.save()
    res.send(result)
})
exp.post("/login",async(req,res)=>{
    const {email, password} = req.body;
    const result = await Registration.findOne({email}).select({name:1,email:1,password:1,phonenumber:1})
    if(!result) return res.send("User does not exist");

    const validpassword = bcrypt.compare(password,result.password);
    if(result.password != password){
        return res.send("Password does not match");
    }
     res.send(result)
})



exp.get("/getAllUSers", async(req, res)=>{
    const result = await Registration.find()
    res.send(result)
})
module.exports = exp