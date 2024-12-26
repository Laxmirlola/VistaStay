const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  console.log("listing-", listing);
  if (!listing) {
    req.flash("error", "Cannot find the listing!");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing does not exists!");
    res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  if (!req.body.listing) {
    throw new ExpressError(400, "Send valid listing data");
  }
  let { id } = req.params;
  const updatedListing = req.body.listing;
  let listing = await Listing.findByIdAndUpdate(id, updatedListing, {
    new: true,
    runValidators: true,
  });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  res.redirect(`/listings/${id}`);
};

module.exports.searchListings = async (req, res) => {
  const query = req.query.query; // Retrieve the search term from the query string
  if (!query) {
    return res.status(400).send("Search query is required.");
  }

  try {
    // const matchingListings = await Listing.find({
    //   $text: { $search: query }, // Assumes a text index on the Listing model
    // });
    // res.render("listings/searchResults", { matchingListings });
    const allListings = await Listing.find({});
    res.render("listings/search.ejs", { query, allListings });
  } catch (error) {
    console.error("Error searching listings:", error);
    res.status(500).send("An error occurred while searching.");
  }
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deleteListing = await Listing.findByIdAndDelete(id);
  console.log(deleteListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
