const express = require("express");
const buyerRoutes = express.Router();
const loginController = require("../controllers/loginController");
const authMiddleware = require("../middleware/authMiddleware");
const productController = require("../controllers/productController");

buyerRoutes.post("/signUp", loginController.signUp);

buyerRoutes.post("/signIn", authMiddleware.isBuyer, loginController.signIn);

buyerRoutes.get("/allProducts", productController.getAllProducts);

module.exports = buyerRoutes;
