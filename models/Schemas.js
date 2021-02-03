const mongoose = require("mongoose");

//----------------
//PROFILE SCHEMA
//----------------

const profileSchema = mongoose.Schema({
	url: {
		type: String,
		required: false,
		min: 6,
		max: 255,
	},
	genre1: {
		type: String,
		required: false,
		min: 6,
		max: 255,
	},
	genre2: {
		type: String,
		required: false,
		min: 6,
		max: 255,
	},
	profession1: {
		type: String,
		required: false,
		min: 6,
		max: 255,
	},
	profession2: {
		type: String,
		required: false,
		min: 6,
		max: 255,
	},
	profession3: {
		type: String,
		required: false,
		min: 6,
		max: 255,
	},
});

//---------------------
// RATINGS SCHEMA
//---------------------

const ratingSchema = mongoose.Schema({
	professionalism: {
		type: String,
		required: false,
		min: 6,
		max: 255,
	},
	communication: {
		type: String,
		required: false,
		min: 6,
		max: 255,
	},
	talent: {
		type: String,
		required: false,
		min: 6,
		max: 255,
	},
});

//-----------------------
// RECOMMENDATIONS SCHEMA
//------------------------

const recommendationSchema = mongoose.Schema({
	//we need a collection of user ids
	body: {
		type: String,
		required: false,
	},
});
