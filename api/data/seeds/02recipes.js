exports.seed = function (knex, Promise) {// eslint-disable-line
	return knex('recipes').insert([
		{ recipe_name: 'Spaghetti Bolognese', source_name: 'Grandma Betty', category_name: 'dinner' },
		{ recipe_name: 'Double Quarter Pounder', source_name: 'Grandma Betty', category_name: 'lunch'},
		{ recipe_name: 'Toasted Bread', source_name: 'Uncle Howie', category_name: 'breakfast'},
	])
}