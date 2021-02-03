const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");

//connect to the database

mongoose.connect(
	process.env.DB_CONNECTION,
	{
		useUnifiedTopology: true,
		useNewUrlParser: true,
	},
	() => {
		console.log("Connected to MongoDB");
	},
);

//Auth Routes
const authRoutes = require("./routes/auth");

//Posts Routes
const postsRoute = require("./routes/posts");

//Friendship/Connections Routes

app.get("/", function (req, res) {
	res.status(200).send("Welcome to the API");
});

// middleware
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/posts", postsRoute);
// Listening to the server

app.listen(PORT, function () {
	console.log("Server is running on PORT:", PORT);
});
