const router = require("express").Router();
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

router.post("/register", async (req, res) => {
	//lets validate

	const { error } = registerValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	//check if user exists

	const emailExists = await User.findOne({ email: req.body.email });
	if (emailExists) return res.status(400).send("Email already exists");

	//hash passwords
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	//create a new user

	const user = await new User({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword,
	});
	try {
		const savedUser = await user.save();
		res.send({
			user: user._id,
			name: user.name,
		});
	} catch (err) {
		res.status(400).send(err);
	}
});

//Login user

router.post("/login", async (req, res) => {
	//lets validate

	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	//check if user exists

	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send("incorrect login credentials");

	//is password correct ?

	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) return res.status(400).send("incorrect password");
	//create and assign a token to
	const token = JWT.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res.header("auth-token", token).send(token);
});
module.exports = router;
