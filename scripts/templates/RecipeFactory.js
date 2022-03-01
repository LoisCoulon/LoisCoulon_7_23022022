class RecipeFactory{
    constructor(recipes) {
        this.recipes = recipes
    }

    createRecipes() {
        let recipeCardsDom = ""
        this.recipes.forEach(recipe => {
            const Template = new RecipeCard(recipe)
            recipeCardsDom += Template.createRecipeCard()
        });
        document.querySelector('.recipes-container').innerHTML = recipeCardsDom
    }
}
