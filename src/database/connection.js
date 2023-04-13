const mysql = require("mysql2");

const database = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

database.connect(function (error) {
	if (!error) {
		console.log("connected to db");
		return;
	}
	console.error("error connecting to DB:" + error);
});

module.exports = database;
