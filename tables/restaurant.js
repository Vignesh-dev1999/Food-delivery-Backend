const mongodb=require("mongoose")

const RestaurantSchema = new mongodb.Schema({
    restaurant_Name:String,
    restaurant_location:String,
    image:String,
    rating:Number,
    popularDishs:[String]
})

const Restaurant = mongodb.model("Restaurant", RestaurantSchema)

module.exports =Restaurant;