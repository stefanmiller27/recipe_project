# recipe_project
# Installation

* step one: git clone project
* step two: npm install dependencies
* step three: npm run server

# Database Tables

### Users
|attribute|data type|				required			|
|---------|---------|---------------------|
|user_id  |integer  |auto-assigns         |
|username |string   |Yes + must be unique |
|password |string   |Yes                  |

### Recipes
|attribute  |data type|	required		|
|-------------|---------|-------------|
|recipe_id    |integer  |auto-assigns |
|recipe_name  |string   |Yes          |
|source_name  |string   |Yes          |
|category_name|string   |Yes          |

### Steps
|		attribute  |data type|				required		 |
|--------------|---------|---------------------|
|step_id       |integer  |auto-assigns         |
|recipe_id(FK) |string   |Yes                  |
|step_number   |string   |Yes                  |
|description   |string   |Yes                  |
|ingredient_name|string   |No         |
|amount        | string | No

* FK: foreign key

# API End Points

* BaseUrl = https://bldwk-scrt-rec-api.herokuapp.com/

### Authentication End Points

|Method|Endpoint|Body(required)|Body(optional)|notes|
|----|--------------------|-------------------------|----|--------------------|
|POST|`/api/auth/register`|wip|wip|wip|
|POST|`/api/auth/login`|wip|wip|wip|

### Recipe End Points

|Method|Endpoint|Body(required)|Body(optional)|notes|
|-|-|-|-|-|
|GET|`/api/recipes`|nothing|nothing|Returns all available recipes from database|
|GET|`/api/recipes/:id`|nothing|nothing|return recipe object with the id passed through the URL|
|POST|`/api/recipes/add`|recipe_name, source_name, steps: [description, step_number] |steps:[amount, ingredient_name], description, category_name|returns newly created recipe|
|PUT|`/api/recipes/:id`|recipe_id, recipe_name|everything else|returns newly updated object|
|DELETE|`/api/recipes/:id`|nothing|nothing|On success returns deletion succesful|
