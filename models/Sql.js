const mysql = require("mysql");
const connection = mysql.createConnection({
	host: "127.0.0.1",
	port: 3307,
	user: "",
	password: "",
	database: "",
});

connection.connect(function (err) {
	if (err) throw err;
	connection.query(
		"SELECT text_body FROM wm_posts_textpost",
		(err, result, fields) => {
			if (err) throw err;
			console.log(result);
		},
	);
});
