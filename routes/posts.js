const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const verify = require("./verifyToken");

//--------------------
// Get all posts
// API: {GET} /posts/
//--------------------
router.get("/", async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (err) {
		res.json({ message: err.message });
	}
});

//--------------------
// Create a post
// API: {POST} /posts/
//--------------------
router.post("/", verify, async (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
	});
	try {
		const savedPost = await post.save();
		res.json(savedPost);
	} catch (err) {
		res.json({ message: err.message });
	}
});
//----------------------------
// Get specific posts
// API: {GET} /posts/{postId}
//----------------------------

router.get("/:postId", async (req, res) => {
	try {
		const post = await Post.findById(req.params.postId);
		res.json(post);
	} catch (err) {
		res.json({ message: err.message });
	}
});

//----------------------------
// Delete specific posts
// API: {DELETE} /posts/{postId}
//----------------------------
router.delete("/:postId", async (req, res) => {
	try {
		const removedPost = await Post.remove({ _id: req.params.postId });
		res.json(removedPost);
	} catch (err) {
		res.json({ message: err.message });
	}
});

//----------------------------
// Update specific posts
// API: {PATCH} /posts/{postId}
//----------------------------
router.patch("/:postId", async (req, res) => {
	try {
		const updatedPost = await Post.updateOne(
			{ _id: req.params.postId },
			{
				$set: {
					title: req.body.title,
					description: req.body.description,
				},
			},
		);
		res.json(updatedPost);
	} catch (err) {
		res.json({ message: err.message });
	}
});

module.exports = router;
