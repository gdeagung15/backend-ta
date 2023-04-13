const getAHPValues = (weights, utilities) => {
	return utilities.map((util) => {
		const utilitiesCpy = { ...util };
		// console.log(util);

		utilitiesCpy.ahpValue =
			utilitiesCpy.utilityType * weights.typeWeight +
			utilitiesCpy.utilityScenery * weights.sceneryWeight +
			utilitiesCpy.utilityBudget * weights.budgetWeight;
		return utilitiesCpy;
	});
};

module.exports = getAHPValues;
