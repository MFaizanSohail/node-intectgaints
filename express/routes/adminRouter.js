const express = require("express");
const adminRouter = express.Router();
const loginController = require("../controllers/loginController");
const productController = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/user");

adminRouter.post("/signIn", authMiddleware.isAdmin, loginController.signIn);

adminRouter.get("/Products", productController.getAllProducts);

adminRouter.post("/addProduct", productController.addProduct);

adminRouter.delete("/:id", productController.removeProduct);

adminRouter.get("/getUsers", async (req, res) => {
	try {
		const users = await User.find({ role: { $ne: "admin" } });

		// Return the filtered users as the response
		res.json(users);
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
});

module.exports = adminRouter;
