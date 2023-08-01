const jwt = require("jsonwebtoken");

const registeredUsers = [
	{ userName: "user1", password: "1234", userType: "admin" },
];

const signUp = (req, res) => {
	console.log("============= req.bodyooo ", req.body);
	registeredUsers.push(req.body);
	res.send("user received");
};

const signIn = (req, res) => {
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
};

const getProducts = (req, res) => {
	console.log("============= req.body===== ", req.headers.authorization);
	const token = req.headers.authorization;
	const user = jwt.verify(token, "shhhhh");
	console.log(" =========== requesting Products-------- ");
	res.send("okay");
};

module.exports = {
	signUp,
	signIn,
};

