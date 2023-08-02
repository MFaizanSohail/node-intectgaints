const mongoose = require("mongoose");

// Define the product schema
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	// You can add more fields based on your specific requirements
});

// Create and export the Product model
module.exports = mongoose.model("Product", productSchema);
