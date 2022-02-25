import { recipes } from "../data/recipes.js";

class App {
  constructor() {
    this.recipeContainer = document.querySelector(".recipes-container");
    this.recipeApi = recipes;
  }

  async main() {
    const recipes = this.recipeApi;
    recipes.forEach((recipe) => {
      const Template = new RecipeCard(recipe);
      this.recipeContainer.appendChild(Template.createRecipeCard());
    });
  }
}

const app = new App();
app.main();
