const isAdmin = (req, res, next) => {
	const requestedUrl = req.originalUrl;

	if (requestedUrl === "/admin/signIn") {
		next();
	} else {
		res.status(403).json({ error: "Unauthorized access." });
	}
	next();
};

const isBuyer = (req, res, next) => {
	const requestedUrl = req.originalUrl;

	if (requestedUrl === "/buyer/signIn") {
		next();
	} else {
		res.status(403).json({ error: "Unauthorized access." });
	}
	next();
};

const isSeller = (req, res, next) => {
	const requestedUrl = req.originalUrl;

	if (requestedUrl === "/seller/signIn") {
		next();
	} else {
		res.status(403).json({ error: "Unauthorized access." });
	}
	next();
};

module.exports = {
	isAdmin,
	isBuyer,
	isSeller,
};
