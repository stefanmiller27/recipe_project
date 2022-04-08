
exports.up = async (knex) => {
	await knex.schema
		.createTable('recipes', table => {
			table.increments('recipe_id')
			table.string('recipe_name', 128).notNullable()
			table.string('source_name', 128).notNullable()
			table.string('category_name', 128).notNullable()
		})
	await knex.schema
		.createTable('steps', table => {
			table.increments('step_id')
			table.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('recipe_id')
				.inTable('recipes')
				.onDelete('CASCADE')
				.onUpdate('CASCADE')
			table.integer('step_number', 128).notNullable()
			table.string('description').notNullable()
			table.string('ingredient_name', 128)
			table.string('amount')
		})
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('steps')
  await knex.schema.dropTableIfExists('recipes')
}