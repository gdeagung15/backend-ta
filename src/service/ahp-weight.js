const getAHPWeight = (priorities, totalData) => {
	const typeWeight = Math.pow(
		priorities.typeToScenery * priorities.typeToBudget,
		1 / totalData
	);
	const sceneryWeight = Math.pow(
		(1 / priorities.typeToScenery) * priorities.sceneryToBudget,
		1 / totalData
	);
	const budgetWeight = Math.pow(
		(1 / priorities.typeToBudget) * (1 / priorities.sceneryToBudget),
		1 / totalData
	);

	const normalizedType =
		typeWeight / (typeWeight + sceneryWeight + budgetWeight);

	const normalizedScenery =
		sceneryWeight / (typeWeight + sceneryWeight + budgetWeight);

	const normalizedBudget =
		budgetWeight / (typeWeight + sceneryWeight + budgetWeight);

	return {
		typeWeight: normalizedType,
		sceneryWeight: normalizedScenery,
		budgetWeight: normalizedBudget,
	};
};

module.exports = getAHPWeight;
