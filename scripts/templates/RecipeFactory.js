class RecipeFactory {
  constructor(recipes) {
    this.recipes = recipes;
  }

  createRecipes() {
    let recipeCardsDom = "";
    this.recipes.forEach((recipe) => {
      const template = new RecipeCard(recipe);
      recipeCardsDom += template.createRecipeCard();
    });
    document.querySelector(".recipes-container").innerHTML = recipeCardsDom;
  }
}
