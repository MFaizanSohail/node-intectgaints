const express = require("express");
const sellerRoutes = express.Router();
const loginController = require("../controllers/loginController");
const authMiddleware = require("../middleware/authMiddleware");
const productController = require("../controllers/productController");

sellerRoutes.post("/signUp", loginController.signUp);

sellerRoutes.post("/signIn", authMiddleware.isSeller, loginController.signIn);

sellerRoutes.get("/", productController.getAllProducts);

sellerRoutes.post("/", productController.addProduct);

sellerRoutes.delete("/:id", productController.removeProduct);

module.exports = sellerRoutes;
