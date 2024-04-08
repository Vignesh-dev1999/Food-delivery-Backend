
const mongodb =require("mongoose")

mongodb.connect(`mongodb+srv://${process.env.mongodb_name}:${process.env.mongodb_password}@vignesh.1fk6y4c.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>console.log("mongodb connected"))
.catch((error)=>console.log(error))

module.exports =mongodb.connection