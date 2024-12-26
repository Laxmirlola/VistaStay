const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({ email: { type: String, required: true } });
// only added email field as package automatically added name, hash function and salt

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
