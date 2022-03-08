class RecipeFactory {
  constructor(recipes) {
    this.recipes = recipes;
  }

  createRecipes(recipesList) {
    let recipeCardsDom = "";
    recipesList.forEach((recipe) => {
      const template = new RecipeCard(recipe);
      recipeCardsDom += template.createRecipeCard();
    });
    document.querySelector(".recipes-container").innerHTML = recipeCardsDom;
  }
}
