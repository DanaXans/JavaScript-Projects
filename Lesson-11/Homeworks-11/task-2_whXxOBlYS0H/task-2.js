/*– взяти https://dummyjson.com/docs/recipes
та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.*/

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(json => {
        let {recipes} = json;
        console.log(recipes);

        let recipe_wrapper = document.createElement('div');

        for (const recipe of recipes) {
            let info = document.createElement('p');
            info.innerText = `${recipe.name}
            id: ${recipe.id}
            difficulty: ${recipe.difficulty}
            cook time: ${recipe.cookTimeMinutes}
            calories: ${recipe.caloriesPerServing}
            review: ${recipe.reviewCount}
            preparing time:  ${recipe.prepTimeMinutes}
            rating: ${recipe.rating}
            cuisine: ${recipe.cuisine}
            type: ${recipe.mealType}
            servings: ${recipe.servings}
            tags: ${recipe.tags}
            user id: ${recipe.userId}
            `;

            let image = document.createElement('img');
            image.src = recipe.image;

            let ingredients_ol = document.createElement('ol');
            ingredients_ol.innerText = `Ingredients:`;
            for (const ingredients of recipe.ingredients) {
                let li_ingredients = document.createElement('li');
                li_ingredients.innerText = ingredients;
                ingredients_ol.appendChild(li_ingredients);
            }

            let instructions_ul = document.createElement('ul');
            instructions_ul.innerText = `Instructions:`;
            for (const instruction of recipe.instructions) {
                let instructions_li = document.createElement('li');
                instructions_li.innerText = instruction;
                instructions_ul.appendChild(instructions_li);
            }
            recipe_wrapper.append(info, image);
            recipe_wrapper.append(ingredients_ol, instructions_ul);
        }
        document.body.appendChild(recipe_wrapper);
    });
