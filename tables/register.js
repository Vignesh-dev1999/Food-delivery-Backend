const mongodb = require("mongoose")


const Registrationschema = new mongodb.Schema({
    name:String,
    email:String,
    password:String,
    phonenumber:Number,
    address:String,
   
    role:{
        type:String,
        default: "user"
    }
})

const Registration = mongodb.model("Resistration",Registrationschema)

module.exports = Registration;