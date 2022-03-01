class RecipeFactory{
    constructor(recipes) {
        this.recipes = recipes
        this.recipeContainer = document.querySelector(".recipes-container");
    }

    createRecipes() {
        this.recipes.forEach(recipe => {
            const Template = new RecipeCard(recipe)
            this.recipeContainer.appendChild(Template.createRecipeCard())
        });
    }
}
