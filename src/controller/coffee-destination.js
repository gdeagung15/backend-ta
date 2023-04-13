const express = require("express");
const { getAllCoffeeDestinations } = require("../repository/coffee-repository");
const getAHPUtilities = require("../service/ahp-utility");
const getAHPValues = require("../service/ahp-value");
const getAHPWeight = require("../service/ahp-weight");
const coffeeDesRouter = express.Router();

coffeeDesRouter.post(
	"/coffee-destination/recommendation",
	async (req, res, next) => {
		try {
			const searchCriteria = req.body;
			const preferences = searchCriteria.preferences;
			const priorities = searchCriteria.priorities;
			const allDestination = await getAllCoffeeDestinations();
			const weights = getAHPWeight(priorities, allDestination.length);
			const utilities = getAHPUtilities(preferences, allDestination);

			const ahpValues = getAHPValues(weights, utilities);

			ahpValues.sort((a, b) => b.ahpValue - a.ahpValue);

			const ommitedKeysData = ahpValues.map((val) => {
				const { utilityType, utilityScenery, utilityBudget, ...data } =
					val;
				return data;
			});

			res.json({
				weights: weights,
				data: ommitedKeysData,
			}).status(200);
		} catch (e) {
			next(e);
		}
		
	}
);

module.exports = coffeeDesRouter;
