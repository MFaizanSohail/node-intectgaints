const { getCollection } = require("../db/connect");

const adminControllers = {};

// Controller to View Products:
adminControllers.viewProducts = async (req, res) => {
  const productsCollection = await getCollection("Products");
  const products = await productsCollection.find({}).toArray();
  res.json(products);
};

// Controller to View Sellers
adminControllers.viewSellers = async (req, res) => {
  const sellersCollection = await getCollection("Sellers");
  const sellers = await sellersCollection.find({}).toArray();
  res.json(sellers);
};

// Controller to View Purchasers
adminControllers.viewPurchasers = async (req, res) => {
  const purchasersCollection = await getCollection("Purchasers");
  const purchasers = await purchasersCollection.find({}).toArray();
  res.json(purchasers);
};

// Controller to Restrict the Purchaser
adminControllers.restrictPurchaser = async (req, res) => {
  const purchasersCollection = await getCollection("Purchasers");
  const purchaserId = req.params.purchaserId; // Assuming you have a route parameter for purchaserId
  const result = await purchasersCollection.updateOne(
    { _id: purchaserId },
    { $set: { isRestricted: true } }
  );
  if (result.modifiedCount > 0) {
    res.send(`Purchaser with ID ${purchaserId} has been restricted.`);
  } else {
    res.send(
      `Purchaser with ID ${purchaserId} not found or already restricted.`
    );
  }
};

// Controller to Restrict the Seller
adminControllers.restrictSeller = async (req, res) => {
  const sellersCollection = await getCollection("Sellers");
  const sellerId = req.params.sellerId; // Assuming you have a route parameter for sellerId
  const result = await sellersCollection.updateOne(
    { _id: sellerId },
    { $set: { isRestricted: true } }
  );
  if (result.modifiedCount > 0) {
    res.send(`Seller with ID ${sellerId} has been restricted.`);
  } else {
    res.send(`Seller with ID ${sellerId} not found or already restricted.`);
  }
};

// Controller to Restrict the Product
adminControllers.restrictProduct = async (req, res) => {
  const productsCollection = await getCollection("Products");
  const productId = req.params.productId; // Assuming you have a route parameter for productId
  const result = await productsCollection.updateOne(
    { _id: productId },
    { $set: { isRestricted: true } }
  );
  if (result.modifiedCount > 0) {
    res.send(`Product with ID ${productId} has been restricted.`);
  } else {
    res.send(`Product with ID ${productId} not found or already restricted.`);
  }
};

// Controller to View Orders
adminControllers.viewOrders = async (req, res) => {
  const ordersCollection = await getCollection("Orders");
  const orders = await ordersCollection.find({}).toArray();
  res.json(orders);
};

module.exports = adminControllers;
