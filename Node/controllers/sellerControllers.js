const { getCollection } = require("../db/connect");
const { ObjectId } = require("mongodb");
const sellerControllers = {};

// Controller to Signup for Seller
sellerControllers.Signup = async (req, res) => {
  const { email, password } = req.body;

  const sellersCollection = await getCollection("Sellers");
  const existingSeller = await sellersCollection.findOne({ email });

  if (existingSeller) {
    return res
      .status(400)
      .json({ error: "Seller with this email already exists." });
  }

  const newSeller = { email, password };
  await sellersCollection.insertOne(newSeller);

  res.send("Seller Signup Successful");
};

// Controller for Seller for Signin
sellerControllers.Signin = async (req, res) => {
  const { email, password } = req.body;

  const sellersCollection = await getCollection("Sellers");
  const existingSeller = await sellersCollection.findOne({ email });

  if (!existingSeller) {
    return res
      .status(404)
      .json({ error: "Seller with this email does not exist." });
  }

  if (existingSeller.password !== password) {
    return res.status(401).json({ error: "Incorrect password." });
  }

  res.send("Seller Signin Successful");
};

// Controller to Create Sellers Products
sellerControllers.createProduct = async (req, res) => {
  const { name, description } = req.body;
  const productsCollection = await getCollection("Products");
  const newProduct = {
    name: name,
    description: description,
  };

  await productsCollection.insertOne(newProduct);
  res.send("Seller Create Products Successful");
};

// Controller to edit Sellers own Products
sellerControllers.editProduct = async (req, res) => {
  const { id } = req.params;
  const productsCollection = await getCollection("Products");

  const objectId = new ObjectId(id);
  const product = await productsCollection.findOne({ _id: objectId });
  if (!product) {
    return res.status(404).json({ error: "Product with this ID not found." });
  }

  const { name, description } = req.body;
  const updatedProduct = {
    name: name || product.name,
    description: description || product.description,
  };

  await productsCollection.updateOne(
    { _id: objectId },
    { $set: updatedProduct }
  );

  res.send(`Edit Product with ID ${objectId} Successful`);
};

// Controller to Delete the Products:

sellerControllers.deleteProduct = async (req, res) => {
  const { id } = req.params;
  const productsCollection = await getCollection("Products");

  const objectId = new ObjectId(id);
  const product = await productsCollection.findOne({ _id: objectId });
  if (!product) {
    return res.status(404).json({ error: "Product with this ID not found." });
  }

  await productsCollection.deleteOne({ _id: objectId });

  res.send(`Delete Product with ID ${objectId} Successful`);
};

// Controller to View Sellers own Orders
sellerControllers.viewOrders = async (req, res) => {
  const ordersCollection = await getCollection("Orders");
  // Assuming you have a way to associate orders with the seller, for example, using req.userId
  const orders = await ordersCollection
    .find({ sellerId: req.userId })
    .toArray();
  res.json(orders);
};

// Controller to View Sellers own Products
sellerControllers.viewProduct = async (req, res) => {
  const productsCollection = await getCollection("Products");
  // Assuming you have a way to associate products with the seller, for example, using req.userId
  const products = await productsCollection
    .find({ sellerId: req.userId })
    .toArray();
  res.json(products);
};

// Controller to edit Sellers own Order Status
sellerControllers.editOrderStatus = async (req, res) => {
  const { orderId } = req.params; // Assuming you have a route parameter for orderId
  const ordersCollection = await getCollection("Orders");
  res.send(`Change Status of Order with ID ${orderId}`);
};

module.exports = sellerControllers;
