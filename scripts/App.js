import { recipes } from "../data/recipes.js";

class App {
  constructor() {
    this.recipes = recipes
  }

  async main() {
    new RecipeFactory(this.recipes).createRecipes()
    new FilterData(recipes).filterData()
  }
}

const app = new App();
app.main();
