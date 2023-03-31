const { Schema, model } = require("mongoose");

const RestaurantSchema = new Schema({
  name: String,
  location: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: [Number],
  },
});

const restaurant = model("Restaurant", RestaurantSchema);

restaurant.collection.createIndex({ location: "2dsphere" });
module.exports = restaurant;
