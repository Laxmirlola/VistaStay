const mongoose = require("mongoose");
const { Schema } = mongoose;
const Review = require("../models/review.js");
const User = require("./user.js");

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: {
    url: String,
    filename: String,
  },
  price: { type: String },
  location: { type: String },
  country: { type: String },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: Review,
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
  isLiked: {
    type: Boolean,
    default: false,
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
}); //to delete the associated with the deleted list as deleting list only delete list and not the associated reviews

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
