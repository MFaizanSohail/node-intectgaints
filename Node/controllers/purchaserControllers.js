const { getCollection } = require("../db/connect");

const purchaserControllers = {};

// Controller for Purchaser Signup
purchaserControllers.Signup = (req, res) => {
  res.send("Purchaser Signup");
};

// Controller for Purchaser Signin
purchaserControllers.Signin = (req, res) => {
  res.send("Purchaser Signin");
};

// Controller for Purchaser to View All Products
purchaserControllers.viewProducts = async (req, res) => {
  const productsCollection = await getCollection("Products");
  const products = await productsCollection.find({}).toArray();
  res.json(products);
};

// Controller to send Products in Cart
purchaserControllers.addProductToCart = async (req, res) => {
  const { productId } = req.params.id;
  const cartCollection = await getCollection("Cart");
  res.send(`Product with ID ${productId} has been added to the cart.`);
};

// Controller to view Products available in Cart
purchaserControllers.viewCartProducts = async (req, res) => {
  const cartCollection = await getCollection("Cart");
  // Assuming you have a way to associate cart items with the purchaser, for example, using req.userId
  const cartItems = await cartCollection
    .find({ purchaserId: req.userId })
    .toArray();
  res.json(cartItems);
};

// Controller for Purchaser to Checkout
purchaserControllers.checkout = async (req, res) => {
  const cartCollection = await getCollection("Cart");
  const orderCollection = await getCollection("Orders");

  // Assuming you have a way to associate cart items with the purchaser, for example, using req.userId
  const cartItems = await cartCollection
    .find({ purchaserId: req.userId })
    .toArray();

  // Assuming you have a way to calculate the total amount and other details for the order
  const order = {
    purchaserId: req.userId,
    items: cartItems,
    totalAmount: 100, // Replace with the actual calculated total amount
    createdAt: new Date(),
  };

  await orderCollection.insertOne(order);

  // Assuming you have a way to handle payment processing (e.g., using Stripe API)
  // Implement the payment processing logic here...

  // Clear the cart after successful checkout
  await cartCollection.deleteMany({ purchaserId: req.userId });

  res.send("Checkout via Stripe");
};

// Controller to View Order List
purchaserControllers.viewOrders = async (req, res) => {
  const orderCollection = await getCollection("Orders");
  // Assuming you have a way to associate orders with the purchaser, for example, using req.userId
  const orders = await orderCollection
    .find({ purchaserId: req.userId })
    .toArray();
  res.json(orders);
};

module.exports = purchaserControllers;
