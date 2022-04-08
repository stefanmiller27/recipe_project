exports.seed = function (knex, Promise) {// eslint-disable-line
	return knex('steps').insert([
		{ description: 'put tomato sauce and olive oil on', step_number: 4, ingredient_name: 'olive oil, tomato sauce', amount:'2tbs, 1jar' , recipe_id: 1 },
		{ description: 'boil water in pot', step_number: 1, ingredient_name: 'water', amount: '56 liters', recipe_id: 1 },
		{ description: 'when spaghetti cooked, take out', step_number: 3, recipe_id: 1 },
		{ description: 'put spaghetti in', step_number: 2, ingredient_name: 'spaghetti', amount: '156 grams',  recipe_id: 1 },
		{ description: 'enjoy', step_number: 5, recipe_id: 1 },
		{ description: 'pour money onto cashier', step_number: 2, ingredient_name: 'money', amount: '4 dollars', recipe_id: 2 },
		{ description: 'enjoy', step_number: 3, recipe_id: 2 },
		{ description: 'drive to mcdonalds', step_number: 1, recipe_id: 2 },
	]);
};