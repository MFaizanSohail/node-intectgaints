let products = [
	{ id: 1, name: "Product 1", price: 10 },
	{ id: 2, name: "Product 2", price: 20 },
	{ id: 3, name: "Product 3", price: 30 },
];

const getAllProducts = (req, res) => {
	res.json(products);
    res.send("all Products");
};

const addProduct = (req, res) => {
    res.send("Product added successfully");
};

const removeProduct = (req, res) => {
    res.send("Product removed successfully");
};

module.exports = {
	getAllProducts,
	addProduct,
	removeProduct,
};
