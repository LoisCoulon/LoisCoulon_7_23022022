import { recipes } from "../data/recipes.js";

class App {
  constructor(recipes) {
    this.recipes = recipes;
  }

  async main() {
    new RecipeFactory(this.recipes).createRecipes();
    new FilterData(this.recipes).filterData();
  }
}

const app = new App(recipes);
app.main();
