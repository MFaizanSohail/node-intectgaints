// Import the Product model
const Product = require("../models/product");

const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};

const addProduct = async (req, res) => {
	try {
		const { name, description, price } = req.body;
		
		const newProduct = new Product({
			name,
			description,
			price,
		});
		
		const savedProduct = await newProduct.save();
		res.json(savedProduct);

	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};

const removeProduct = async (req, res) => {
	try {
		const productId = req.params.productId;
		await Product.deleteOne({ _id: productId });
		res.json({ message: "Product removed successfully" });
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};

module.exports = {
	getAllProducts,
	addProduct,
	removeProduct,
};
