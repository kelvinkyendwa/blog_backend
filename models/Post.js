const mongoose = require("mongoose");

// Create a schema/models

const PostSchema = mongoose.Schema({
	body: {
		type: String,
		required: true,
	},
	//type can be text, image, video
	type: {
		type: String,
		required: true,
	},
	//send url to db for images and video
	url: {
		type: String,
		required: false,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Posts", PostSchema);
