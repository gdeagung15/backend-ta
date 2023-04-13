const COFFEE_SHOPE_TYPE = require("../constant/coffee-shop-type");
const SCENERY = require("../constant/scenery");

const getAHPUtilities = (preferences, allDestinations) => {
	const utilities = {
		type: {},
		scenery: {},
	};

	switch (preferences.type) {
		case COFFEE_SHOPE_TYPE.MODERN:
			utilities.type = {
				[COFFEE_SHOPE_TYPE.MODERN]: 100,
				[COFFEE_SHOPE_TYPE.ANGKRINGAN]: 50,
				[COFFEE_SHOPE_TYPE.WARUNG]: 0,
			};
			break;
		case COFFEE_SHOPE_TYPE.ANGKRINGAN:
			utilities.type = {
				[COFFEE_SHOPE_TYPE.MODERN]: 25,
				[COFFEE_SHOPE_TYPE.ANGKRINGAN]: 100,
				[COFFEE_SHOPE_TYPE.WARUNG]: 25,
			};
			break;
		case COFFEE_SHOPE_TYPE.WARUNG:
			utilities.type = {
				[COFFEE_SHOPE_TYPE.MODERN]: 0,
				[COFFEE_SHOPE_TYPE.ANGKRINGAN]: 50,
				[COFFEE_SHOPE_TYPE.WARUNG]: 100,
			};
			break;
	}

	switch (preferences.scenery) {
		case SCENERY.BEACH:
			utilities.scenery = {
				[SCENERY.BEACH]: 100,
				[SCENERY.URBAN]: 50,
				[SCENERY.MOUNTAINS]: 0,
			};
			break;
		case SCENERY.URBAN:
			utilities.scenery = {
				[SCENERY.BEACH]: 25,
				[SCENERY.URBAN]: 100,
				[SCENERY.MOUNTAINS]: 25,
			};
			break;
		case SCENERY.MOUNTAINS:
			utilities.scenery = {
				[SCENERY.BEACH]: 0,
				[SCENERY.URBAN]: 50,
				[SCENERY.MOUNTAINS]: 100,
			};
			break;
	}

	const copiedDest = [...allDestinations];

	const adjustedDestinations = copiedDest.map((dest) => {
		const destination = { ...dest };
		destination.utilityType = utilities.type[destination.shop_type];
		destination.utilityScenery =
			utilities.scenery[destination.shop_scenery];
		destination.utilityBudget =
			-0.0000001 *
				Math.pow(destination.shop_budget - preferences.budget / 10, 2) +
			100;
		destination.utilityBudget = Math.max(destination.utilityBudget, 0);
		return destination;
	});

	return adjustedDestinations;
};

module.exports = getAHPUtilities;
