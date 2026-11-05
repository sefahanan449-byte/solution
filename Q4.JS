// 1. Create the recipes array
const recipes = [
    { name: "pancakes", ingredients: "flour,milk,egg" },
    { name: "omelette", ingredients: "egg,cheese,milk" },
    { name: "toast", ingredients: "bread,butter" }
];

// 2. Create the format function using object destructuring
const format = ({ name, ingredients }) => {
    return `${name.toUpperCase()}: ${ingredients.split(",").join(", ")}`;
};

// 3. Use map() and for...of to print each recipe
const formattedRecipes = recipes.map(format);

for (const recipe of formattedRecipes) {
    console.log(recipe);
}

// 4. Use reduce() to count all ingredients
const totalIngredients = recipes.reduce((total, recipe) => {
    return total + recipe.ingredients.split(",").length;
}, 0);

console.log(`Total ingredients used: ${totalIngredients}`);

// 5. Use filter() and includes() to count recipes with egg
const recipesWithEgg = recipes.filter(recipe =>
    recipe.ingredients.includes("egg")
);

console.log(`Recipes with egg: ${recipesWithEgg.length}`);



// 6. Use reduce() to find the recipe with the most ingredients
const mostIngredients = recipes.reduce((most, recipe) => {
    const currentCount = recipe.ingredients.split(",").length;
    const mostCount = most.ingredients.split(",").length;

    return currentCount > mostCount ? recipe : most;
});

console.log(
    `Most ingredients: ${mostIngredients.name} (${mostIngredients.ingredients.split(",").length})`
);