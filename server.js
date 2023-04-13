require("dotenv").config();
require("./src/database/connection");
const { json } = require("express");
const express = require("express");
const cors = require("cors");
const coffeeDesRouter = require("./src/controller/coffee-destination");
const server = express();

server.use(cors());
server.use(json());
server.use(coffeeDesRouter);

server.listen(process.env.SERVER_PORT, () => {
	console.info(`listening to port ${process.env.SERVER_PORT}`);
});
