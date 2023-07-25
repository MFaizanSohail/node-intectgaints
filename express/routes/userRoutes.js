const express = require("express");
const userRouter = express.Router();

userRouter.post("/post", function (req, res) {
	res.send("create new post");
});

userRouter
	.route("/:id")
	.get((req, res) => {
		res.send("send details ${req.params.id}");
	})
	.put((req, res) => {
		res.send("edit user");
	})
	.delete((req, res) => {
		res.send("delete user");
	});

module.exports = userRouter;
