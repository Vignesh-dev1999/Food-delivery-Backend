const Registration = require("../tables/register")
const ex = require("express")
const exp = ex.Router()
const bcrypt = require("bcrypt")

exp.post("/register", async (req, res) => {
    const result = Registration({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phonenumber: req.body.phonenumber,
        address: req.body.address

    })

    const salt = await bcrypt.genSalt(2);
    result.password = await bcrypt.hash(result.password, salt)

    await result.save()
    res.send(result)
})
exp.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const result = await Registration.findOne({ email }).select({ name: 1, email: 1, password: 1, phonenumber: 1,role:1 })
    if (!result) return res.send("User does not exist");
 

    let validpassword =  bcrypt.compareSync(password, result.password)
    console.log(validpassword);
    if (validpassword) {
        return res.send({ result: "success",role: result.role});
    }
    return res.send("not suc")
})

exp.post("/sellerlogin", async(req,res)=>{
    const { email, password } = req.body;

    const result = await Registration.findOne({email}).select({name:1,email:1, password:1,phonenumber:1, role:1})
    if(!result) return res.send("Your not seller");

    let validdpassword = bcrypt.compareSync(password, result.password)
    console.log(validdpassword);
    if(validdpassword){
        return res.send({result:"success",role:result.role});
    }
    return res.send("Your not seller")
})


module.exports = exp