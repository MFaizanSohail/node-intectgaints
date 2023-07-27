const express = require("express");
const adminRouter = express.Router();

const adminMiddelware = (req, res, next) => {
	console.log("admin");
	req.next();
};

adminRouter.get("/posts", adminMiddelware, function (req, res) {
	res.send("View user posts");
});

adminRouter.post("/users", function (req, res) {
	res.send("Create new user");
});

adminRouter.put("/users/:id", function (req, res) {
	res.send("Update user");
});

adminRouter.delete("/users/:id", function (req, res) {
	res.send("Delete user");
});

module.exports = adminRouter;
