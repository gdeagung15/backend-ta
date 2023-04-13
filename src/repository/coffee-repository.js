const database = require("../database/connection");

const getAllCoffeeDestinations = async () => {
	const promise = new Promise((resolve, reject) => {
		
		database.query(
			`SELECT id, shop_name, 
				shop_description, 
				shop_scenery, 
				shop_type, 
				shop_budget, 
				shop_logo_url, 
				shop_thumbnail_url 
			FROM coffee_destination`,

			(err, res) => {
				if (err) {
					console.error("error at querying database:" + err);
					reject(err);
				}
				resolve(res);
			}
		);
	});

	return promise;
};

module.exports.getAllCoffeeDestinations = getAllCoffeeDestinations;
