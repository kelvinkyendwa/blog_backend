const { func } = require("@hapi/joi");
const JWT = require("jsonwebtoken");

module.exports = function (req, res, next) {
	const token = req.header("auth-token");
	if (!token) return res.status(401).send("Access denied");
	try {
		const verified = JWT.verify(token, process.env.TOKEN_SECRET);
		req.user = verified;
		next();
	} catch (err) {
		res.status(400).send("Invalid Token");
	}
};
