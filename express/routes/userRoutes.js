const express = require("express");
const router = express.Router();
var jwt = require("jsonwebtoken");

const registeredUsers = [];

router.post("/signUp", function (req, res) {
	console.log("============= req.bodyooo ", req.body);
	registeredUsers.push(req.body);
	res.send("user received");
});

router.post("/signIn", function (req, res) {
	console.log("============= req.body===== ", req.body);
	const result = registeredUsers.filter(
		(user) =>
			user.userName === req.body.userName &&
			user.password === req.body.password
	);
	console.log("--------- matched user ------- ", result);
	if (result.length) {
		var token = jwt.sign(result[0], "shhhhh");
		res.send(token);
	} else {
		res.status(401).send("Authentication failed");
	}
});

router.get("/getUsers", function (req, res) {
	console.log("============= req.body===== ", req.headers.authorization);
	const token = req.headers.authorization;
	const user = jwt.verify(token, "shhhhh");
	console.log(" =========== requesting user-------- ", user);
	res.send("okay");
});

module.exports = router;
