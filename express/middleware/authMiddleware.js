const isAdmin = (req, res, next) => {
	const token = req.headers.authorization;
	if (!token) {
		return res.status(401).json({ error: "Unauthorized access." });
	}

	try {
		const decodedToken = jwt.verify(token, "asdkasdj");
		const roles = decodedToken.roles;

		if (roles.includes("admin")) {
			next();
		} else {
			res.status(403).json({ error: "Unauthorized access." });
		}
	} catch (error) {
		res.status(401).json({ error: "Unauthorized access." });
	}
};

const isBuyer = (req, res, next) => {
	const token = req.headers.authorization;
	if (!token) {
		return res.status(401).json({ error: "Unauthorized access." });
	}

	try {
		const decodedToken = jwt.verify(token, "asdkasdj");
		const roles = decodedToken.roles;

		if (roles.includes("buyer")) {
			next();
		} else {
			res.status(403).json({ error: "Unauthorized access." });
		}
	} catch (error) {
		res.status(401).json({ error: "Unauthorized access." });
	}
};

const isSeller = (req, res, next) => {
	const token = req.headers.authorization;
	if (!token) {
		return res.status(401).json({ error: "Unauthorized access." });
	}

	try {
		const decodedToken = jwt.verify(token, "asdkasdj");
		const roles = decodedToken.roles;

		if (roles.includes("seller")) {
			next();
		} else {
			res.status(403).json({ error: "Unauthorized access." });
		}
	} catch (error) {
		res.status(401).json({ error: "Unauthorized access." });
	}
};

module.exports = {
	isAdmin,
	isBuyer,
	isSeller,
};
