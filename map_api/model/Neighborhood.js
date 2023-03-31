const mongoose = require("mongoose");

const NeighborhoodSchema = new mongoose.Schema(
  {
    name: String,
    geometry: {
      type: {
        type: String,
        default: "Polygon",
      },
      coordinates: [[[Number]]],
    },
  },
  { collection: "neighborhoods" }
);

const neighborhood = mongoose.model("Neighborhood", NeighborhoodSchema);

neighborhood.collection.createIndex({ geometry: "2dsphere" });

module.exports = neighborhood;
