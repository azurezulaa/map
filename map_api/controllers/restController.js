const Restaurant = require("../model/Restaurant");

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json({ success: true, restaurants });
  } catch (error) {
    console.log("amjiltgui");
    res.status(400).json({ success: false, message: error });
  }
};

const createRestaurant = async (req, res) => {
  const { name, lon, lat } = req.body;

  try {
    const restaurant = await Restaurant.create({
      name,
      location: { coordinates: [lon, lat] },
    });
    res.status(200).json({ success: true, restaurant });
  } catch (error) {
    console.log("amjiltgui");
    res.status(400).json({ success: false, message: error });
  }
};

const getNearBranch = async (req, res) => {
  const { lon, lat } = req.body;
  const { distance } = req.query;

  try {
    const branches = await Restaurant.find({
      location: {
        $near: {
          $geometry: { type: "Point", coordinates: [lon, lat] },
          $maxDistance: distance,
        },
      },
    });
    res.status(200).json({ success: true, branches });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

module.exports = { getRestaurants, createRestaurant, getNearBranch };
