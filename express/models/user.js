const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	roles: {
		type: [String],
		default: ["buyer"],
	},
});

// Create and export the User model
module.exports = mongoose.model("User", userSchema);
