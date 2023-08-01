const express = require("express");
const adminRouter = express.Router();
const loginController = require('../controllers/loginController');
const authMiddleware = require('../middleware/authMiddleware');
const jwt = require("jsonwebtoken");

adminRouter.post("/signIn", authMiddleware.isAdmin, loginController.signIn);

adminRouter.get("/getUsers", function (req, res) {
	console.log("============= req.body===== ", req.headers.authorization);
	const token = req.headers.authorization;
	const user = jwt.verify(token, "shhhhh");
	console.log(" =========== requesting user-------- ", user);
	res.send("okay");
});


module.exports = adminRouter;
