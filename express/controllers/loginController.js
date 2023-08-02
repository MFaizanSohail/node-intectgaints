const jwt = require("jsonwebtoken");
const User = require("../models/user");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

dotenv.config();

cloudinary.config({
	cloud_name: "dzf0ujoyi",
	api_key: "826614736156327",
	api_secret: "h4gBak_6u7_v7uOCUzuxTu8ZXhs",
});
// console.log("outside of the body");


const signUp = async (req, res) => {
	// console.log("================================" + req.body);

	try {
		// console.log("signUpooooooooooooooooooooooooooooooo");
		const { name, email, password, roles } = req.body;
		console.log(req.body);
		// Create a new user instance using the User model
		const newUser = new User({
			name,
			email,
			password,
			roles,
		});
		console.log(req.file);

		if (req.file) {
			const result = await cloudinary.uploader.upload(req.file.path, {
				folder: "user_images",
			});
			req.body;
			newUser.image = result.secure_url;
		}

		const savedUser =  newUser.save();

		res.json({
			message: "User registered successfully",
			user: {
				id: savedUser._id,
				name: savedUser.name,
				email: savedUser.email,
				roles: savedUser.roles,
				image: savedUser.image, 
			},
		});
	} catch (error) {
		console.error("==================== error: " + error);
		res.status(500).json({ error: "Internal Server Error testing" + error });
	}
};

const signIn = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email, password });

		if (user) {
			const token = jwt.sign(
				{ email: user.email, roles: user.roles },
				"asdkasdj"
			);
			res.send(token);
		} else {
			res.status(401).send("Authentication failed");
		}
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};

module.exports = {
	signUp,
	signIn,
};
